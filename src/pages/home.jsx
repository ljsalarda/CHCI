"use client";

import React from "react";
import { partners, projects, researchAreas } from "../data/site-data";

export function Home() {
  const stats = [
    {
      number: researchAreas.length,
      label: "Research Areas",
      link: "#research",
    },
    { number: 0, label: "Publications" },
    { number: projects.length, label: "Projects", link: "#projects" },
    { number: partners.length, label: "Partners", link: "#partners" },
  ];
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-linear-to-b from-white via-blue-50/40 to-white"
    >
      {/* 🔵 Background Design Layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* left accent */}
        <div className="absolute top-20 -left-30 w-75 h-75 bg-[#3A7CC3]/10 rounded-full blur-3xl" />

        {/* right accent */}
        <div className="absolute bottom-10 -right-30 w-65 h-65 bg-[#0A3D91]/10 rounded-full blur-3xl" />

        {/* subtle tech grid overlay */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(#0A3D91_1px,transparent_1px),linear-gradient(90deg,#0A3D91_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      <div className="container relative z-9 mx-auto px-5 sm:px-6 py-auto text-center">
        <div className="mx-auto max-w-8xl space-y-7">
          {/* Main heading */}
          <div className="space-y-6 -mt-35">
            <h1 className="text-5xl sm:text-8xl md:text-8xl font-black tracking-tight text-balance leading-tight">
              Center for{" "}
              <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Human-Computer
              </span>
              <br />
              Interaction
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-3xl md:text-4xl font-light text-muted-foreground italic">
            &ldquo;Humanizing Technology&rdquo;
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 md:hidden">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Swipe</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
        <div className="hidden md:flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
            <div
              className="w-1 h-2 bg-muted-foreground rounded-full animate-bounce"
              style={{ animationDuration: "2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
