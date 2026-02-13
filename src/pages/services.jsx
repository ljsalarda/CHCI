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
    responsible: "",
    activity: "Approval and Terms Agreement",
    activityType: "single",
    iface: "",
  },
  {
    responsible: "Center Chief / CSU Legal",
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

        {/* Process Flow for Availing Services */}
        <AnimateOnScroll className="mt-20">
          <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
            <div className="px-6 pt-8 pb-4 md:px-10 md:pt-10">
              <h3 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
                Process Flow for Availing the Services of CHCI
              </h3>
              <p className="mx-auto mb-0 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
                Follow this step-by-step process to engage with our center and
                access the services you need.
              </p>
            </div>

            {/* Table-style flowchart */}
            <div className="mx-4 mb-8 overflow-x-auto md:mx-8">
              <div className="min-w-[640px]">
                {/* Table Header */}
                <div className="flex border-b-2 border-foreground bg-primary">
                  <div className="flex w-40 shrink-0 items-center justify-center border-r border-primary-foreground/20 px-3 py-3 md:w-48">
                    <p className="text-center text-xs font-bold uppercase tracking-wider text-primary-foreground">
                      Responsible Person
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-3 py-3">
                    <p className="text-center text-xs font-bold uppercase tracking-wider text-primary-foreground">
                      Activities
                    </p>
                  </div>
                  <div className="flex w-32 shrink-0 items-center justify-center border-l border-primary-foreground/20 px-3 py-3 md:w-40">
                    <p className="text-center text-xs font-bold uppercase tracking-wider text-primary-foreground">
                      Interface
                    </p>
                  </div>
                </div>

                {/* Rows */}
                {flowRows.map((row, i) => (
                  <div
                    key={`${row.responsible}-${i}`}
                    className={`flex border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}
                  >
                    {/* Responsible Person */}
                    <div className="flex w-40 shrink-0 items-center justify-center border-r border-border px-3 py-5 md:w-48">
                      <p className="text-center text-xs font-bold text-primary md:text-sm">
                        {row.responsible || "\u00A0"}
                      </p>
                    </div>

                    {/* Activity (center) */}
                    <div className="flex flex-1 flex-col items-center justify-center px-4 py-5">
                      {/* Arrow from previous row */}
                      {i > 0 && (
                        <div className="mb-3 flex flex-col items-center">
                          <div className="h-4 w-0.5 bg-primary" />
                          <div className="h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-primary" />
                        </div>
                      )}

                      {row.activityType === "single" && (
                        <div className="rounded-md border-2 border-foreground/80 bg-card px-8 py-3 text-center shadow-sm">
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
                            {row.branches?.map((b) => (
                              <div
                                key={b}
                                className="relative rounded-md border-2 border-foreground/60 bg-card px-3 py-2.5 text-center shadow-sm"
                              >
                                <p className="text-xs font-medium text-foreground leading-tight">
                                  {b}
                                </p>
                              </div>
                            ))}
                          </div>
                          {/* Downward arrows from branches */}
                          <div className="flex w-full justify-around px-[12%]">
                            <div className="flex flex-col items-center">
                              <div className="h-3 w-0.5 bg-primary/50" />
                              <div className="h-0 w-0 border-x-[4px] border-t-[5px] border-x-transparent border-t-primary/50" />
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="h-3 w-0.5 bg-primary/50" />
                              <div className="h-0 w-0 border-x-[4px] border-t-[5px] border-x-transparent border-t-primary/50" />
                            </div>
                          </div>
                        </div>
                      )}

                      {row.activityType === "dual" && (
                        <div className="flex w-full items-center justify-center gap-3 md:gap-6">
                          <div className="rounded-md border-2 border-foreground/60 bg-card px-4 py-2.5 text-center shadow-sm">
                            <p className="text-xs font-semibold text-foreground md:text-sm">
                              {row.left}
                            </p>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="h-0.5 w-6 bg-primary/50" />
                          </div>
                          <div className="rounded-md border-2 border-foreground/80 bg-card px-4 py-2.5 text-center shadow-sm">
                            <p className="text-xs font-semibold text-foreground md:text-sm">
                              {row.right}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Arrow to next row */}
                      {i < flowRows.length - 1 && (
                        <div className="mt-3 flex flex-col items-center">
                          <div className="h-4 w-0.5 bg-primary" />
                        </div>
                      )}
                    </div>

                    {/* Interface */}
                    <div className="flex w-32 shrink-0 items-center justify-center border-l border-border px-3 py-5 md:w-40">
                      <p className="text-center text-xs font-medium text-muted-foreground md:text-sm">
                        {row.iface || "\u00A0"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
