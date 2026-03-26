const REQUIRED_ENV_VARS = [
  "GMAIL_CLIENT_ID",
  "GMAIL_CLIENT_SECRET",
  "GMAIL_REFRESH_TOKEN",
  "GMAIL_SENDER_EMAIL",
];

const MAX_LENGTHS = {
  fullName: 120,
  email: 254,
  subject: 180,
  message: 5000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_CONTACT_SENDER_NAME = "Website Inquiry";

const sanitizeHeader = (value) => value.replace(/[\r\n]+/g, " ").trim();
const escapeDisplayName = (value) => sanitizeHeader(value).replace(/["\\]/g, "\\$&");
const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
const formatAddressHeader = (email, displayName = "") => {
  const sanitizedEmail = sanitizeHeader(email);
  const sanitizedDisplayName = sanitizeHeader(displayName);

  if (!sanitizedDisplayName) {
    return sanitizedEmail;
  }

  return `"${escapeDisplayName(sanitizedDisplayName)}" <${sanitizedEmail}>`;
};
const formatTimestamp = () =>
  new Intl.DateTimeFormat("en-PH", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Manila",
  }).format(new Date());
const buildInboxSubject = ({ fullName, subject }) => {
  const senderName = sanitizeHeader(fullName);
  const inquirySubject = sanitizeHeader(subject);

  return `[Website Inquiry] ${senderName} - ${inquirySubject}`;
};
const buildPlainTextBody = ({ fullName, email, subject, message, receivedAt }) =>
  [
    "WEBSITE INQUIRY",
    "",
    "A new contact form submission has been received.",
    "",
    "INQUIRY DETAILS",
    "---------------",
    `Full name: ${fullName}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    `Received: ${receivedAt} (Asia/Manila)`,
    "",
    "MESSAGE",
    "-------",
    message,
  ].join("\r\n");
const buildHtmlBody = ({ fullName, email, subject, message, receivedAt }) => {
  const safeFullName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeReceivedAt = escapeHtml(receivedAt);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  return `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;padding:24px;background:#eef4fb;font-family:Arial,sans-serif;color:#16324f;">
        <div style="margin:0 auto;max-width:680px;">
          <div style="margin-bottom:16px;">
            <span style="display:inline-block;border-radius:999px;background:#dce9f9;padding:6px 12px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#24538a;">
              Website Inquiry
            </span>
          </div>

          <div style="overflow:hidden;border:1px solid #d6e3f3;border-radius:20px;background:#ffffff;box-shadow:0 18px 40px rgba(19,52,88,0.08);">
            <div style="padding:28px 28px 20px;background:linear-gradient(135deg,#0b4f8a 0%,#2f7ecb 100%);color:#ffffff;">
              <p style="margin:0 0 8px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.84;">
                New Submission
              </p>
              <h1 style="margin:0;font-size:28px;line-height:1.2;">A visitor sent an inquiry.</h1>
            </div>

            <div style="padding:28px;">
              <div style="margin-bottom:24px;border:1px solid #e2ebf5;border-radius:16px;background:#f8fbff;padding:18px 20px;">
                <p style="margin:0 0 16px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#24538a;">
                  Inquiry Details
                </p>

                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:0 0 12px;font-size:13px;font-weight:700;color:#5a6e85;">Full name</td>
                    <td style="padding:0 0 12px;font-size:15px;color:#16324f;">${safeFullName}</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 12px;font-size:13px;font-weight:700;color:#5a6e85;">Email</td>
                    <td style="padding:0 0 12px;font-size:15px;color:#16324f;">${safeEmail}</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 12px;font-size:13px;font-weight:700;color:#5a6e85;">Subject</td>
                    <td style="padding:0 0 12px;font-size:15px;color:#16324f;">${safeSubject}</td>
                  </tr>
                  <tr>
                    <td style="padding:0;font-size:13px;font-weight:700;color:#5a6e85;">Received</td>
                    <td style="padding:0;font-size:15px;color:#16324f;">${safeReceivedAt} (Asia/Manila)</td>
                  </tr>
                </table>
              </div>

              <div>
                <p style="margin:0 0 12px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#24538a;">
                  Message
                </p>
                <div style="border:1px solid #e2ebf5;border-radius:16px;background:#ffffff;padding:20px;font-size:15px;line-height:1.7;color:#16324f;white-space:normal;">
                  ${safeMessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `.trim();
};
const parseJsonSafely = (text) => {
  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
};

const sendJson = (res, statusCode, payload) => {
  if (typeof res.status === "function" && typeof res.json === "function") {
    return res.status(statusCode).json(payload);
  }

  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
};

const getMissingEnvVars = () =>
  REQUIRED_ENV_VARS.filter((variableName) => !process.env[variableName]?.trim());

const validatePayload = (payload) => {
  const cleaned = {
    fullName: typeof payload.fullName === "string" ? payload.fullName.trim() : "",
    email: typeof payload.email === "string" ? payload.email.trim() : "",
    subject: typeof payload.subject === "string" ? payload.subject.trim() : "",
    message: typeof payload.message === "string" ? payload.message.trim() : "",
  };

  const errors = {};

  if (!cleaned.fullName) {
    errors.fullName = "Full name is required.";
  } else if (cleaned.fullName.length > MAX_LENGTHS.fullName) {
    errors.fullName = `Full name must be ${MAX_LENGTHS.fullName} characters or less.`;
  }

  if (!cleaned.email) {
    errors.email = "Email is required.";
  } else if (cleaned.email.length > MAX_LENGTHS.email || !EMAIL_PATTERN.test(cleaned.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!cleaned.subject) {
    errors.subject = "Subject is required.";
  } else if (cleaned.subject.length > MAX_LENGTHS.subject) {
    errors.subject = `Subject must be ${MAX_LENGTHS.subject} characters or less.`;
  }

  if (!cleaned.message) {
    errors.message = "Message is required.";
  } else if (cleaned.message.length > MAX_LENGTHS.message) {
    errors.message = `Message must be ${MAX_LENGTHS.message} characters or less.`;
  }

  return { cleaned, errors };
};

const buildRawMessage = ({ fullName, email, subject, message }) => {
  const senderEmail = sanitizeHeader(process.env.GMAIL_SENDER_EMAIL.trim());
  const senderName = sanitizeHeader(
    process.env.CONTACT_SENDER_NAME?.trim() || DEFAULT_CONTACT_SENDER_NAME,
  );
  const recipientEmail = sanitizeHeader(
    (process.env.CONTACT_RECIPIENT_EMAIL || process.env.GMAIL_SENDER_EMAIL).trim(),
  );
  const inboxSubject = buildInboxSubject({ fullName, subject });
  const receivedAt = formatTimestamp();
  const plainTextBody = buildPlainTextBody({
    fullName,
    email,
    subject,
    message,
    receivedAt,
  });
  const htmlBody = buildHtmlBody({
    fullName,
    email,
    subject,
    message,
    receivedAt,
  });
  const encodedSubject = Buffer.from(inboxSubject, "utf8").toString("base64");
  const boundary = `contact_form_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;

  const rawMessage = [
    `To: ${recipientEmail}`,
    `From: ${formatAddressHeader(senderEmail, senderName)}`,
    `Reply-To: ${formatAddressHeader(email, fullName)}`,
    `Subject: =?UTF-8?B?${encodedSubject}?=`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    plainTextBody,
    "",
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    htmlBody,
    "",
    `--${boundary}--`,
  ].join("\r\n");

  return Buffer.from(rawMessage).toString("base64url");
};

const getAccessToken = async () => {
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: process.env.GMAIL_CLIENT_ID,
      client_secret: process.env.GMAIL_CLIENT_SECRET,
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });

  const tokenData = parseJsonSafely(await tokenResponse.text());

  if (!tokenResponse.ok || !tokenData.access_token) {
    throw new Error(`Failed to refresh Gmail access token: ${JSON.stringify(tokenData)}`);
  }

  return tokenData.access_token;
};

const sendMessage = async (rawMessage) => {
  const accessToken = await getAccessToken();
  const gmailResponse = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ raw: rawMessage }),
  });

  const responseText = await gmailResponse.text();
  const responseData = parseJsonSafely(responseText);

  if (!gmailResponse.ok) {
    throw new Error(`Gmail API request failed: ${JSON.stringify(responseData)}`);
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { message: "Method not allowed." });
  }

  const missingEnvVars = getMissingEnvVars();
  if (missingEnvVars.length > 0) {
    console.error("Missing Gmail configuration:", missingEnvVars);
    return sendJson(res, 500, { message: "Email service is not configured." });
  }

  const { cleaned, errors } = validatePayload(req.body || {});
  if (Object.keys(errors).length > 0) {
    return sendJson(res, 400, {
      message: "Please correct the highlighted fields.",
      errors,
    });
  }

  try {
    const rawMessage = buildRawMessage(cleaned);
    await sendMessage(rawMessage);

    return sendJson(res, 200, {
      message: "Message sent successfully. We will get back to you as soon as possible.",
    });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return sendJson(res, 500, {
      message: "We could not send your message right now. Please try again later.",
    });
  }
}
