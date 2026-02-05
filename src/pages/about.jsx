"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export function AboutSection() {
   const [isExpanded, setIsExpanded] = useState(false)
  return (
    <section id="about" className="py-12 md:py-16 lg:py-24">
      {/* Adjusted container padding: px-4 (mobile) -> px-8 (tablet) -> px-12 (desktop) */}
      <div className="container mx-auto px-4 md:px-8 lg:px-26">
        {/* Adjusted grid gap: gap-8 (mobile) -> gap-16 (desktop) */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:mb-6 md:text-3xl lg:text-4xl">
              Know More about <span className="text-primary">CHCI</span>
            </h2>
            
            <p className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              The Center for Human-Computer Interaction (CHCI) at Caraga State
              University is a pioneering research center dedicated to advancing
              the frontiers of computing through human-centric design and
              innovation.
            </p>
            
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Our interdisciplinary team of researchers, designers, and
              engineers work collaboratively to create technologies that bridge
              intelligent systems and human needs, fostering inclusive
              development and empowering communities across the Caraga region
              and beyond.
            </p>
            
              <Button 
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className={`gap-2 mt-4 w-35 transition-colors self-center ${
                isExpanded
                  ? "bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200"
                  : "bg-blue-800 text-white"
              }`}
            >
              {isExpanded ? "Show Less" : "Know More"}
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>

          {/* Video Content */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/OlJuSZeyug8?autoplay=1&mute=1&playsinline=1"
              title="CHCI Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
              allowFullScreen
            />
          </div>
          <div className={`lg:col-span-2 overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-250 opacity-100 mt-8" : "max-h-0 opacity-0"}`}>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                 <h3 className="text-xl font-bold text-[#0A3D91] mb-3">Sustainability Plan</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizing human sciences, computational, engineering and information technologies and fostering research and development on the area of artificial intelligence, augmented reality, and other HCIs-related field of specialization to deploy computing Research Development Innovation outputs for the development of Caraga region and beyond.
                  </p>
              </div>
              <div>
                
                
                {/* Research Publication */}
                <div>
                  <h3 className="text-xl font-bold text-[#0A3D91] mb-3">Research Publication</h3>
                  <p className="text-muted-foreground mb-4">
                    With the collaborative efforts of the members and staff, the following research papers have been published:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-[#3A7CC3] font-bold">•</span>
                      Deep Imitation Learning for Safe Indoor Autonomous Micro-Aerial Vehicle Navigation
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-[#3A7CC3] font-bold">•</span>
                      Faculty Facial Recognition using Deep Learning, a tool for Smart Academic Monitoring
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <span className="text-[#3A7CC3] font-bold">•</span>
                      OCR based Document Archiving and Indexing using PyTesseract: A Record Management System for DSWD Caraga, Philippines.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
}