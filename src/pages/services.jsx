"use client";

import {
  GraduationCap,
  Search,
  Briefcase,
  ClipboardList,
  FileCheck,
  Rocket,
  ArrowRight,
  BookOpen,
  Award,
  Wrench,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

const trainingRows = [
  {
    icon: BookOpen,
    type: "Short Courses",
    items:
      "UX/UI Design Principles, Data Privacy Compliance, Gamification Strategies for Educators",
  },
  {
    icon: Award,
    type: "Certification Programs",
    items:
      "Preparing professionals for industry-recognized certifications in Cybersecurity and AI Ethics",
  },
  {
    icon: Wrench,
    type: "Workshops",
    items:
      "Hands-on boot camps for students and professionals in VR/AR development and Multimedia Arts, Digital Literacy, etc.",
  },
];

const serviceCards = [
  {
    icon: Briefcase,
    title: "Technical Consultancy",
    accent: "from-primary to-primary/80",
    bullets: [
      "High-level advising on secure and scalable IT infrastructure for regional agencies",
      "Evaluation of existing websites and software systems for usability, accessibility, and user experience compliance.",
      "Assisting Local Government Units (LGUs) in drafting ordinances related to Smart Cities and ICT adoption.",
    ],
  },
  {
    icon: Search,
    title: "Research-as-a-Service (RaaS)",
    accent: "from-secondary to-secondary/80",
    bullets: [
      "Custom Solution Development",
      "User Testing & Analysis",
      "Impact Assessment",
    ],
  },
  {
    icon: GraduationCap,
    title: "Internship & Immersion Program",
    accent: "from-primary to-secondary",
    bullets: ["Student Internship (OJT)", "Student/Professional Immersion"],
  },
];

const steps = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Inquiry",
    description: "Submit your interest and initial requirements to get started.",
  },
  {
    icon: FileCheck,
    step: "Step 2",
    title: "Evaluation & Proposal",
    description:
      "Our team reviews your needs and prepares a tailored service proposal.",
  },
  {
    icon: Rocket,
    step: "Step 3",
    title: "Engagement & Delivery",
    description:
      "We execute the engagement and deliver quality results on schedule.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-18 lg:py-18">
      {/* Decorative background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
              <Briefcase className="h-3.5 w-3.5" />
              What We Offer
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
              Services and Extensions Portfolio
            </h2>
            <p className="mx-auto mt-2 max-w-3xl leading-relaxed text-muted-foreground">
              To sustain its operations and fulfill its mandate as a social
              catalyst, the Center offers a portfolio of specialized services to
              industry, government, and the academe. These services are designed to
              translate the Center&apos;s technical expertise into tangible value
              for stakeholders.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Training & Certification */}
        <AnimateOnScroll className="mt-8">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-md md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Specialized Training & Certification
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {trainingRows.map((row) => (
                <div
                  key={row.type}
                  className="group relative overflow-hidden rounded-xl border border-border bg-muted/30 p-5 transition-all duration-300 hover:border-secondary/50 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <row.icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-bold text-foreground">{row.type}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {row.items}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Service Feature Cards */}
        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceCards.map((card) => (
            <AnimateOnScroll key={card.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Colored top bar */}
                <div className={`h-1.5 w-full bg-linear-to-r ${card.accent}`} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <card.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-foreground">
                    {card.title}
                  </h4>
                  <ul className="mt-4 flex-1 space-y-3">
                    {card.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Availing the Services */}
        <AnimateOnScroll className="mt-20">
          <div className="rounded-2xl bg-primary px-6 py-12 md:px-12 md:py-16">
            <h3 className="mb-4 text-center font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
              Availing the Services
            </h3>
            <p className="mx-auto mb-12 max-w-xl text-center text-sm leading-relaxed text-primary-foreground/80">
              Getting started is simple. Follow these three steps to engage with
              our team and receive expert support.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.step} className="relative flex flex-col items-center text-center">
                  {/* Connector line (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-primary-foreground/20 md:block lg:left-[calc(50%+48px)] lg:w-[calc(100%-96px)]" />
                  )}

                  <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10 ring-2 ring-primary-foreground/20 backdrop-blur-sm">
                    <s.icon className="h-7 w-7 text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground shadow-lg">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/60">
                    {s.step}
                  </p>
                  <h4 className="mt-1.5 font-heading text-lg font-bold text-primary-foreground">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
