"use client";

import { useState } from "react";
import { Eye, Target, HeartHandshake, Layers, Users,ChevronDown, ChevronUp } from "lucide-react";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

const orgChart = [
  { label: "University" },
  { label: "President" },
  { label: "VP for RIE" },
  { label: "RDISO" },
  { label: "CHCI Center Chief" },
];

const units = [
  "Multi-Sensory Computing Unit",
  "Gaming Science Unit",
  "Cyber Intelligence Computing Unit",
  "Computing for Development Unit",
  "Multimedia Science Unit",
];

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left text */}
            <div className="flex-1">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                About Us
              </p>
              <h2 className="font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">
                Know More about CHCI
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                The Center for Human-Computer Interaction (CHCI) at Caraga State
                University is a pioneering research center dedicated to advancing
                the frontiers of computing through human-centric design and
                innovation.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our interdisciplinary team of researchers, designers, and engineers
                work collaboratively to create technologies that bridge intelligent
                systems and human needs, fostering inclusive development and
                empowering communities across the Caraga region and beyond.
              </p>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Know More
                {expanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {expanded && (
                <div className="mt-6 animate-in fade-in slide-in-from-top-2 rounded-lg border border-border bg-card p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm uppercase tracking-widest text-primary mb-2 font-medium">
                      What Drives Us
                    </p>
                    <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                      Vision & Mission 
                    </h2>
                  </div>                 
                 <div className="mt-6">
                  <div className="bg-card rounded-xl p-8 shadow-sm h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Vision</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground flex-1">
                To be the premier driver of human-centric computing innovation in Caraga, 
                elevating CSU as a global leader at the convergence of science, technology, 
                and the arts.
              </p>
            </div>
                  </div>

                  <div className="mt-6">
                    <div className="bg-card rounded-xl p-8 shadow-sm h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mission</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground flex-1">
                To advance the frontiers of computing by engineering human-centric technologies 
                that bridge intelligent systems and human needs; fostering interdisciplinary 
                research that transforms lives, empowers communities, and drives inclusive development.
              </p>
            </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right column: YouTube + Core Values (when expanded) */}
            <div className="flex flex-1 flex-col gap-6">
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="CHCI Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              {expanded && (
                <div className="animate-in fade-in slide-in-from-top-2 rounded-lg border border-border bg-card p-6">
                  <h3 className="text-2xl font-bold text-center mb-8">
            Core Values <span className="text-primary">(The HCI Way)</span>
          </h3>
                  <div className="mt-4 space-y-4">
                    <div className="bg-card rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                          <HeartHandshake className="h-6 w-6" />
                        </div>
                        <h4 className="text-lg font-bold text-primary">
                          H — Human-Centricity
                        </h4>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold">We Design for People First.</span><br />
                        Technology must adapt to human needs, not the other way around.
                        Uphold ethical intelligence and empathy as the foundation of every system.
                      </p>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Layers className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-primary">
                  C — Convergence
                </h4>
              </div>
              <p className="text-muted-foreground">
                <span className="font-semibold">We Bridge Disciplines.</span><br />
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
                <h4 className="text-lg font-bold text-primary">
                  I — Inclusive Impact
                </h4>
              </div>
              <p className="text-muted-foreground">
                <span className="font-semibold">We Leave No One Behind.</span><br />
                Committed to Social Engagement (C4D), bridging the digital divide and
                creating tangible value for the communities of Caraga and beyond.
              </p>
            </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Organization Structure — inside expanded Know More */}
        {expanded && (
          <AnimateOnScroll className="mt-12">
            <div className="animate-in fade-in slide-in-from-top-2 rounded-lg border border-border bg-card p-6 lg:p-8">
              <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-secondary">
                Organization
              </p>
              <h3 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
                Organization Structure
              </h3>

              {/* Vertical org chart */}
              <div className="mt-12 flex flex-col items-center">
                {orgChart.map((item, i) => (
                  <div key={item.label} className="flex flex-col items-center">
                    {i > 0 && <div className="h-8 w-px bg-border" />}
                    <div className="rounded-lg border border-border bg-muted/50 px-6 py-3 text-center shadow-sm">
                      <p className="text-sm font-semibold text-foreground">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Branch to units */}
                <div className="h-8 w-px bg-border" />
                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Research Units
                  </p>
                  <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {units.map((unit) => (
                      <div
                        key={unit}
                        className="rounded-lg border border-secondary/30 bg-secondary/5 px-4 py-3 text-center transition-colors hover:bg-secondary/10"
                      >
                        <p className="text-sm font-medium text-foreground">
                          {unit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
