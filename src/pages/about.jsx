"use client";

import { useState } from "react";
import { Eye, Target, HeartHandshake, Layers, Users, ChevronDown, ChevronUp } from "lucide-react";

const units = [
  { name: "Multi-Sensory Computing Unit", image: "/MSC.png" },
  { name: "Gaming Science Unit", image: "/GS.png" },
  { name: "Cyber Intelligence Computing Unit", image: "/CIC.png" },
  { name: "Computing for Development Unit", image: "/CFD.png" },
  { name: "Multimedia Science Unit", image: "/MS.png" },
];

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-b from-white via-blue-50/40 to-white"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 -left-30 h-75 w-75 rounded-full bg-[#3A7CC3]/10 blur-3xl" />
        <div className="absolute bottom-10 -right-30 h-65 w-65 rounded-full bg-[#0A3D91]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(#0A3D91_1px,transparent_1px),linear-gradient(90deg,#0A3D91_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      <div
        className={`container mx-auto flex min-h-[90vh] flex-col px-4 py-16 sm:px-6 md:py-20 lg:px-8 ${
          expanded ? "justify-start" : "justify-center"
        }`}
      >
        <div className="w-full">
          <div className="mb-8 text-center md:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              About CHCI
            </span>
            <h2 className="mt-2 mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Know More <span className="text-primary">About Us</span>
            </h2>
            <div className="mx-auto h-1 w-16 bg-[#0A3D91]" />
          </div>

          <div className="grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center xl:gap-14 max-w-7xl mx-auto">
            {/* Left text */}
            <div className="flex flex-1 flex-col">
               <p className="mb-4 text-xl leading-relaxed text-muted-foreground md:text-xl">
              The Center for Human-Computer Interaction (CHCI) at Caraga State
              University is a pioneering research center dedicated to advancing
              the frontiers of computing through human-centric design and
              innovation.
            </p>
            
            <p className="text-xl leading-relaxed text-muted-foreground md:text-xl">
              Our interdisciplinary team of researchers, designers, and
              engineers work collaboratively to create technologies that bridge
              intelligent systems and human needs, fostering inclusive
              development and empowering communities across the Caraga region
              and beyond.
            </p>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Know More
                {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {expanded && (
                <div className="mt-6 animate-in fade-in slide-in-from-top-2 rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <div className="mb-6 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                      What Drives Us
                    </p>
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                      Vision & Mission
                    </h2>
                  </div>
                  <div className="mt-6">
                    <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                          <Eye className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground sm:text-2xl">Vision</h3>
                      </div>
                      <p className="flex-1 leading-relaxed text-muted-foreground">
                        To be the premier driver of human-centric computing innovation in Caraga,
                        elevating CSU as a global leader at the convergence of science, technology,
                        and the arts.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                          <Target className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground sm:text-2xl">Mission</h3>
                      </div>
                      <p className="flex-1 leading-relaxed text-muted-foreground">
                        To advance the frontiers of computing by engineering human-centric
                        technologies that bridge intelligent systems and human needs; fostering
                        interdisciplinary research that transforms lives, empowers communities, and
                        drives inclusive development.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right column: YouTube + Core Values (when expanded) */}
            <div className="flex flex-1 flex-col gap-6">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/41V8IHq_oDw?si=xlh1KkfnIP1x02no"
                  title="CHCI Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              {expanded && (
                <div className="animate-in fade-in slide-in-from-top-2 rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <h3 className="mb-8 text-center text-2xl font-bold">
                    Core Values <span className="text-primary">(The HCI Way)</span>
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div className="bg-card rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                          <HeartHandshake className="h-6 w-6" />
                        </div>
                        <h4 className="text-lg font-bold text-primary">H - Human-Centricity</h4>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold">We Design for People First.</span>
                        <br />
                        Technology must adapt to human needs, not the other way around. Uphold
                        ethical intelligence and empathy as the foundation of every system.
                      </p>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                          <Layers className="h-6 w-6" />
                        </div>
                        <h4 className="text-lg font-bold text-primary">C - Convergence</h4>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold">We Bridge Disciplines.</span>
                        <br />
                        Merge the logic of Science & Engineering with the creativity of the Arts.
                        Treat code and design as equal partners in driving innovation.
                      </p>
                    </div>

                    {/* I */}
                    <div className="bg-card rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                          <Users className="h-6 w-6" />
                        </div>
                        <h4 className="text-lg font-bold text-primary">I - Inclusive Impact</h4>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold">We Leave No One Behind.</span>
                        <br />
                        Committed to Social Engagement (C4D), bridging the digital divide and
                        creating tangible value for the communities of Caraga and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Organization Structure - inside expanded Know More */}
        {expanded && (
          <div className="mt-10 md:mt-12">
            <div className="animate-in fade-in slide-in-from-top-2 rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-8">
              <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-secondary">
                Organization
              </p>
              <h3 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
                Organization Structure
              </h3>

              {/* Vertical org chart */}
              <div className="mt-6 flex flex-col items-center">
                {/* University President */}
                <div className="relative group mb-2">
                  <div className="absolute -inset-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3] rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-full max-w-44 rounded-xl border border-[#0A3D91] bg-white px-6 py-4 text-center font-bold text-[#0A3D91] shadow-lg transition-shadow hover:shadow-xl">
                    University
                    <br />
                    President
                  </div>
                </div>

                <ChevronDown className="w-6 h-6 text-[#3A7CC3] mb-2" />

                {/* VP for RIE */}
                <div className="relative group mb-2">
                  <div className="absolute -inset-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3] rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-full max-w-44 rounded-xl border border-[#3A7CC3] bg-white px-6 py-4 text-center font-bold text-[#0A3D91] shadow-lg transition-shadow hover:shadow-xl">
                    VP for RIE
                  </div>
                </div>

                <ChevronDown className="w-6 h-6 text-[#3A7CC3] mb-2" />

                {/* RDISO */}
                <div className="relative group mb-2">
                  <div className="absolute -inset-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3] rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-full max-w-44 rounded-xl border border-[#0A3D91] bg-white px-6 py-4 text-center font-bold text-[#0A3D91] shadow-lg transition-shadow hover:shadow-xl">
                    RDISO
                  </div>
                </div>

                <ChevronDown className="w-6 h-6 text-[#3A7CC3] mb-2" />

                {/* CHCI Center Chief */}
                <div className="relative group mb-6">
                  <div className="absolute -inset-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3] rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-full max-w-48 rounded-xl border border-[#0A3D91] bg-linear-to-br from-[#0A3D91] to-[#3A7CC3] px-6 py-4 text-center font-bold text-white shadow-xl transition-shadow hover:shadow-2xl">
                    CHCI Center
                    <br />
                    Chief
                  </div>
                </div>

                {/* Units Grid */}
                <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {units.map((unit, idx) => (
                    <div key={idx} className="group relative">
                      <div className="absolute -inset-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3] rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
                      <div className="relative p-2 rounded-xl bg-white border border-[#3A7CC3] text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col items-center justify-center gap-3">
                        <img
                          src={unit.image}
                          alt={unit.name}
                          className="h-12 w-20 object-contain"
                        />
                        <span className="font-bold text-sm text-[#0A3D91] leading-tight">
                          {unit.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
