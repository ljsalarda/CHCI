"use client";

import {
  GraduationCap,
  Search,
  Briefcase,
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

const flowRows = [
  {
    responsible: "Client",
    activity: "Service Inquiry",
    activityType: "single",
    iface: "Email, Website, Physical Visit",
  },
  {
    responsible: "CHCI Admin Staff",
    activity: null,
    activityType: "branches",
    branches: [
      "Internship and Student Immersion Programs",
      "Research and Innovation Support",
      "Facilities and Equipment Access",
      "Other Services",
    ],
    iface: "Service Request Form",
  },
  {
    responsible: "Client",
    activity: null,
    activityType: "dual",
    left: "Submit Letter of Intent",
    right: "Submits a Service Request Form",
    iface: "",
  },
  {
    responsible: "Center Chief / Faculty Affiliates",
    activity: "Evaluates request",
    activityType: "single",
    iface: "",
  },
  {
    responsible: "Center Chief / CSU Legal",
    activity: "Approval and Terms Agreement",
    activityType: "single",
    iface: "",
  },
  {
    responsible: "Center Chief",
    activity: "Service Implementation",
    activityType: "single",
    iface: "",
  },
  {
    responsible: "Center Chief",
    activity: "Completion and Feedback",
    activityType: "single",
    iface: "",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-16 md:py-16 bg-linear-to-b from-white via-blue-50/40 to-white"
    >
      {/* 🔵 Background Design Layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* left accent */}
        <div className="absolute top-20 -left-30 w-75 h-75 bg-[#3A7CC3]/20 rounded-full blur-3xl" />

        {/* right accent */}
        <div className="absolute bottom-10 -right-30 w-65 h-65 bg-[#0A3D91]/20 rounded-full blur-3xl" />

        {/* subtle tech grid overlay */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(#0A3D91_1px,transparent_1px),linear-gradient(90deg,#0A3D91_1px,transparent_1px)] bg-size-[50px_50px]" />
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
              industry, government, and the academe. These services are designed
              to translate the Center&apos;s technical expertise into tangible
              value for stakeholders.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Training & Certification */}
        <AnimateOnScroll className="mt-10">
          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-lg md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
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
                  className="group relative overflow-hidden rounded-2xl border border-border/70 bg-muted/30 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/50 hover:bg-card hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <row.icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-bold text-foreground">
                      {row.type}
                    </p>
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
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceCards.map((card) => (
            <AnimateOnScroll key={card.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Colored top bar */}
                <div className={`h-1.5 w-full bg-linear-to-r ${card.accent}`} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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

        {/* Process Flow for Availing Services */}
        <AnimateOnScroll className="mt-20">
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-xl">
            <div className="px-6 pt-8 pb-4 md:px-10 md:pt-10">
              <h3 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
                Process Flow for Availing the Services of CHCI
              </h3>
              <p className="mx-auto mb-0 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
                Follow this step-by-step process to engage with our center and
                access the services you need.
              </p>
            </div>

            {/* Responsive flowchart */}
            <div className="mx-4 mb-8 lg:mx-8">
              {/* Small + Medium */}
              <div className="space-y-3 lg:hidden">
                {flowRows.map((row, i) => (
                  <div key={`${row.responsible}-${i}`} className="space-y-3">
                    <div className="rounded-2xl border border-border/70 bg-card p-4 shadow-sm">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {row.responsible && (
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                            {row.responsible}
                          </span>
                        )}
                        {row.iface && (
                          <span className="rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold text-secondary">
                            {row.iface}
                          </span>
                        )}
                      </div>

                      {row.activityType === "single" && (
                        <div className="rounded-xl border border-border bg-muted/20 px-4 py-3 text-center">
                          <p className="text-sm font-semibold text-foreground">
                            {row.activity}
                          </p>
                        </div>
                      )}

                      {row.activityType === "branches" && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {row.branches?.map((b) => (
                              <div
                                key={b}
                                className="rounded-xl border border-border bg-muted/20 px-3 py-2.5 text-center text-xs font-medium text-foreground"
                              >
                                {b}
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            <div className="rounded-xl border border-primary/40 bg-primary/5 px-3 py-2 text-center text-xs font-semibold text-primary">
                              Internship path &rarr; Submit Letter of Intent
                            </div>
                            <div className="rounded-xl border border-secondary/40 bg-secondary/5 px-3 py-2 text-center text-xs font-semibold text-secondary">
                              Other services path &rarr; Service Request Form
                            </div>
                          </div>
                        </div>
                      )}

                      {row.activityType === "dual" && (
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          <div className="rounded-xl border border-foreground/60 bg-card px-4 py-2.5 text-center text-xs font-semibold text-foreground">
                            {row.left}
                          </div>
                          <div className="rounded-xl border border-foreground/80 bg-card px-4 py-2.5 text-center text-xs font-semibold text-foreground">
                            {row.right}
                          </div>
                        </div>
                      )}
                    </div>

                    {i < flowRows.length - 1 && (
                      <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                          <div className="h-4 w-0.5 bg-primary/70" />
                          <div className="h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-primary/70" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Large screens */}
              <div className="hidden overflow-x-auto lg:block">
                <div className="min-w-205">
                  {/* Table Header */}
                  <div className="flex rounded-t-xl border-b border-primary/30 bg-linear-to-r from-primary to-primary/85">
                    <div className="flex w-40 shrink-0 items-center justify-center border-r border-primary-foreground/25 px-3 py-3 md:w-48">
                      <p className="text-center text-xs font-bold uppercase tracking-wider text-primary-foreground">
                        Responsible Person
                      </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center px-3 py-3">
                      <p className="text-center text-xs font-bold uppercase tracking-wider text-primary-foreground">
                        Activities
                      </p>
                    </div>
                    <div className="flex w-32 shrink-0 items-center justify-center border-l border-primary-foreground/25 px-3 py-3 md:w-40">
                      <p className="text-center text-xs font-bold uppercase tracking-wider text-primary-foreground">
                        Interface
                      </p>
                    </div>
                  </div>

                  {/* Rows */}
                  {flowRows.map((row, i) => (
                    <div
                      key={`${row.responsible}-${i}`}
                      className={`flex transition-colors ${i % 2 === 0 ? "bg-card" : "bg-muted/20"} hover:bg-muted/40`}
                    >
                      {/* Responsible Person */}
                      <div className="flex w-40 shrink-0 items-center justify-center border-r border-border/70 px-3 py-5 md:w-48">
                        <p className="text-center text-xs font-semibold text-primary md:text-sm">
                          {row.responsible || "\u00A0"}
                        </p>
                      </div>

                      {/* Activity (center) */}
                      <div className="flex flex-1 flex-col items-center justify-center border-b border-border/70 px-4 py-5">
                        {/* Arrow from previous row */}
                        {i > 0 && row.activityType !== "dual" && (
                          <div className="mb-3 flex flex-col items-center">
                            <div className="h-4 w-0.5 bg-primary" />
                            <div className="h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-primary" />
                          </div>
                        )}

                        {row.activityType === "single" && (
                          <div className="rounded-xl border-2 border-foreground/70 bg-card px-8 py-3 text-center shadow-sm">
                            <p className="text-sm font-semibold text-foreground">
                              {row.activity}
                            </p>
                          </div>
                        )}

                        {row.activityType === "branches" && (
                          <div className="flex w-full flex-col items-center gap-3">
                            {/* Horizontal connector line */}
                            <div className="relative flex w-full items-center justify-center">
                              <div className="absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-primary/50" />
                            </div>
                            <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4">
                              {row.branches?.map((b, branchIndex) => (
                                <div
                                  key={b}
                                  className="relative rounded-xl border-2 border-foreground/55 bg-card px-3 py-2.5 text-center shadow-sm transition-colors hover:border-primary/50"
                                >
                                  <p className="text-xs font-medium text-foreground leading-tight">
                                    {b}
                                  </p>
                                  {branchIndex === 0 && (
                                    <div className="mt-2 flex justify-center md:hidden">
                                      <div className="flex flex-col items-center">
                                        <div className="h-4 w-0.5 bg-primary" />
                                        <div className="h-0 w-0 border-x-4 border-t-[6px] border-x-transparent border-t-primary" />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                            {/* Desktop connectors: left path + right grouped path aligned side-by-side */}
                            <div className="hidden w-full items-start md:grid md:grid-cols-4">
                              <div className="flex justify-center">
                                <div className="flex flex-col items-center">
                                  <div className="h-4 w-0.5 bg-primary" />
                                  <div className="h-0 w-0 border-x-4 border-t-[6px] border-x-transparent border-t-primary" />
                                </div>
                              </div>
                              <div className="col-span-3 flex flex-col items-center">
                                <div className="relative h-1 w-full">
                                  <div className="absolute top-0 left-10 right-10 h-0.5 bg-primary/50" />
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="h-4 w-0.5 bg-primary" />
                                  <div className="h-0 w-0 border-x-4 border-t-[6px] border-x-transparent border-t-primary" />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {row.activityType === "dual" && (
                          <div className="flex w-full items-center justify-center gap-10 md:gap-20">
                            <div className="rounded-xl border-2 border-foreground/60 bg-card px-5 py-2.5 text-center shadow-sm">
                              <p className="text-xs font-semibold text-foreground md:text-sm">
                                {row.left}
                              </p>
                            </div>
                            <div className="rounded-xl border-2 border-foreground/80 bg-card px-5 py-2.5 text-center shadow-sm">
                              <p className="text-xs font-semibold text-foreground md:text-sm">
                                {row.right}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Interface */}
                      <div className="flex w-32 shrink-0 items-center justify-center border-l border-border/70 px-3 py-5 md:w-40">
                        <p className="text-center text-xs font-medium text-muted-foreground md:text-sm">
                          {row.iface || "\u00A0"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
