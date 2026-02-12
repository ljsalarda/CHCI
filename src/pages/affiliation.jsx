"use client";

import { useState } from "react";
import {
  Users,
  UserCheck,
  GraduationCap,
  Shield,
  Star,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";

const memberCategories = [
  {
    icon: UserCheck,
    letter: "A",
    title: "Primary Affiliate Members (Core Researchers)",
    requirements: [
        "Full-time faculty members of the College of Computing and Information Sciences (CCIS) whose primary research interest aligns with one of the 5 Pillars.",
      "Must have at least one (1) ongoing research project registered under the Center or a published paper in the last academic year related to HCI.",
      "Eligible to be appointed as Unit Heads and vote on internal policy matters.",
    ],
    color: "bg-primary",
  },
  {
    icon: Users,
    letter: "B",
    title: "Secondary Affiliate Members (Collaborators)",
    requirements: [
        "Faculty members from other colleges (e.g., Engineering, Arts & Sciences) or external industry partners collaborating on specific projects.",
      "Invitation by a Unit Head for the duration of a specific project or grant.",
      "Specific access to Center resources relevant to their project; non-voting status.",
    ],
    color: "bg-secondary",
  },
  {
    icon: GraduationCap,
    letter: "C",
    title: "Student Researchers (Junior Fellows)",
    requirements: [
        "Undergraduate or Graduate students currently conducting their thesis/capstone projects or any research-related activities for the Center under the supervision of a Primary Member.",
      "Acceptance of their research proposal by the Center's Research Committee.",
      "Access to laboratory facilities during designated hours.",
    ],
    color: "bg-primary",
  },
];

const rights = [
  "Priority use of the CHCI Laboratory, including specialized equipment (VR headsets, sensors, high-performance computing units).",
  "Endorsement for internal university funding and administrative support for external grant applications.",
  "Priority slots for training, workshops, and certification programs funded, organized, initiated or supported by the Center.",
  "Right to be credited in publications and intellectual property filings resulting from their contributions.",
];

const duties = [
  "Acquire or be part of an externally/internally-funded research projects recognized by the OVPRIE.",
  "Produce at least one (1) research output (publication, prototype, copyright or IP application) annually.",
  "Mentor or actively supervise Student Researchers within the Center.",
  "Participate in the activities and Annual Strategic Planning and the HCI Summit.",
  "Acknowledge the \"Center for Human-Computer Interaction (CHCI)\" as their affiliation in all relevant publications and presentations.",
];

const termination = [
  "Failure to comply with duties and responsibilities.",
  "Violation of research ethics, data privacy laws, or misuse of Center assets.",
];

export default function AffiliationSection() {
  const [activeTab, setActiveTab] = useState("rights");

  const tabs = [
    { key: "rights", label: "Rights & Privileges", icon: Star },
    { key: "duties", label: "Duties & Responsibilities", icon: Shield },
    { key: "termination", label: "Termination", icon: AlertTriangle },
  ];

  const tabContent = {
    rights: { items: rights, icon: CheckCircle2 },
    duties: { items: duties, icon: CheckCircle2 },
    termination: { items: termination, icon: AlertTriangle },
  };

  return (
    <section id="affiliation" className="relative overflow-hidden bg-muted py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.04),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--secondary)/0.04),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <Users className="h-3.5 w-3.5" />
              Get Involved
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl lg:text-5xl">
              Membership and Participation
            </h2>
            <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              To maintain a culture of high performance, membership in the Center is privilege-based and output-oriented. It is open to individuals who demonstrate active engagement in the Center's research agenda.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {memberCategories.map((cat) => (
            <AnimateOnScroll key={cat.letter}>
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`h-1.5 w-full ${cat.color}`} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${cat.color} text-primary-foreground shadow-lg transition-transform group-hover:scale-110`}>
                      <cat.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Category {cat.letter}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {cat.requirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
            <div className="flex border-b border-border bg-muted/50">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex flex-1 items-center justify-center gap-2 px-4 py-4 text-sm font-semibold transition-all ${
                    activeTab === tab.key
                      ? "border-b-2 border-primary bg-card text-primary"
                      : "text-muted-foreground hover:bg-card/50 hover:text-foreground"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            <div className="p-6 md:p-8">
              <ol className="space-y-3">
                {tabContent[activeTab].items.map((item, i) => {
                  const ItemIcon = tabContent[activeTab].icon;
                  return (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-transparent p-3 transition-colors hover:border-border hover:bg-muted/50"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <ItemIcon
                          className={`h-3.5 w-3.5 ${
                            activeTab === "termination" ? "text-destructive" : "text-primary"
                          }`}
                        />
                      </span>

                      <div className="flex items-start gap-2">
                        <span className="text-sm font-bold text-foreground">{i + 1}.</span>
                        <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
