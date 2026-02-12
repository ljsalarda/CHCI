"use client";
    
import {
  GraduationCap,
  Search,
  Briefcase,
  ClipboardList,
  FileCheck,
  Rocket,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

const trainingRows = [
  {
    type: "Short Courses",
    items:
      "UX/UI Design Principles, Data Privacy Compliance, Gamification Strategies for Educators",
  },
  {
    type: "Certification Programs",
    items:
      "Preparing professionals for industry-recognized certifications in Cybersecurity and AI Ethics",
  },
  {
    type: "Workshops",
    items:
      "Hands-on boot camps for students and professionals in VR/AR development and Multimedia Arts, Digital Literacy, etc.",
  },
];

const serviceCards = [
  {
    icon: Briefcase,
    title: "Technical Consultancy",
    bullets: [
      "High-level advising on secure and scalable IT infrastructure for regional agencies",
      "Evaluation of existing websites and software systems for usability, accessibility, and user experience compliance.",
      "Assisting Local Government Units (LGUs) in drafting ordinances related to Smart Cities and ICT adoption.",
    ],
  },
  {
    icon: Search,
    title: "Research-as-a-Service (RaaS)",
    bullets: [
      "Custom Solution Development",
      "User Testing & Analysis",
      "Impact Assessment",
    ],
  },
  {
    icon: GraduationCap,
    title: "Internship & Immersion Program",
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
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              What We Offer
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">
              Services and Extensions Portfolio
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted-foreground">
            To sustain its operations and fulfill its mandate as a social
            catalyst, the Center offers a portfolio of specialized services to
            industry, government, and the academe. These services are designed to
            translate the Center&apos;s technical expertise into tangible value
            for stakeholders.
          </p>
        </AnimateOnScroll>

        {/* Training & Certification */}
        <AnimateOnScroll className="mt-16">
          <h3 className="mb-6 font-heading text-xl font-bold text-foreground">
            Specialized Training & Certification
          </h3>

          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-lg border border-border md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-primary">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-primary-foreground">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-primary-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {trainingRows.map((row, i) => (
                  <tr
                    key={row.type}
                    className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-foreground align-top">
                      {row.type}
                    </td>
                    <td className="px-6 py-4 text-sm leading-relaxed text-muted-foreground">
                      {row.items}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {trainingRows.map((row) => (
              <div
                key={row.type}
                className="rounded-lg border border-border bg-card p-4"
              >
                <p className="text-sm font-bold text-primary">{row.type}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {row.items}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Service feature cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceCards.map((card) => (
            <AnimateOnScroll key={card.title}>
              <div className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground">
                  {card.title}
                </h4>
                <ul className="mt-4 flex-1 space-y-2">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Availing the Services */}
        <AnimateOnScroll className="mt-16">
          <h3 className="mb-8 text-center font-heading text-xl font-bold text-foreground">
            Availing the Services
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                    {i + 1}
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {s.step}
                </p>
                <h4 className="mt-1 font-heading text-lg font-bold text-foreground">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
