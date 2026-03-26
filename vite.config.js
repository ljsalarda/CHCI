import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import contactHandler from "./api/contact.js";

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sendJson = (res, statusCode, payload) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
};

const readRequestBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON request body."));
      }
    });

    req.on("error", reject);
  });

const contactApiDevPlugin = () => ({
  name: "contact-api-dev",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const pathname = req.url ? new URL(req.url, "http://localhost").pathname : "";

      if (pathname !== "/api/contact") {
        next();
        return;
      }

      try {
        if (req.method === "POST") {
          req.body = await readRequestBody(req);
        }

        await contactHandler(req, res);
      } catch (error) {
        const isBadRequest = error instanceof Error && error.message === "Invalid JSON request body.";

        if (!res.writableEnded) {
          sendJson(res, isBadRequest ? 400 : 500, {
            message: isBadRequest
              ? "Invalid JSON request body."
              : "The local contact API failed to process the request.",
          });
        }

        if (!isBadRequest) {
          console.error("Local contact API failed:", error);
        }
      }
    });
  },
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, "");
  Object.assign(process.env, env);

  return {
    plugins: [tailwindcss(), react(), contactApiDevPlugin()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
