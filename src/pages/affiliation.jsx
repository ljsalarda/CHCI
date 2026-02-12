"use client";

import AnimateOnScroll from "@/components/ui/animate-on-scroll";

export default function AffiliationSection() {
  return (
    <section id="affiliation" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Get Involved
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">
              Membership and Participation
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mx-auto mt-12 max-w-4xl">
          <AnimateOnScroll>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
              {/* Categories */}
              <h3 className="font-heading text-lg font-bold text-primary">
                Categories of Membership
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0s-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    A
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Regular Members
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Faculty, researchers, and staff of Caraga State University
                      actively involved in CHCI programs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    B
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Associate Members
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      External collaborators, visiting scholars, and industry
                      partners contributing to the center&apos;s research agenda.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    C
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Student Members
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Undergraduate and graduate students engaged in CHCI
                      research projects, internships, or immersion programs.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Divider */}
              <hr className="my-8 border-border" />

              {/* Rights and Privileges */}
              <h3 className="font-heading text-lg font-bold text-primary">
                Rights and Privileges
              </h3>
              <ol className="mt-4 list-inside space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">1.</span>
                  Access to CHCI research facilities, laboratories, and resources.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">2.</span>
                  Eligibility to participate in CHCI-sponsored projects, grants,
                  and publications.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">3.</span>
                  Voting rights in CHCI governance and general assembly meetings
                  (Regular Members only).
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">4.</span>
                  Priority enrollment in CHCI training programs, workshops, and
                  certification courses.
                </li>
              </ol>

              <hr className="my-8 border-border" />

              {/* Duties and Responsibilities */}
              <h3 className="font-heading text-lg font-bold text-primary">
                Duties and Responsibilities
              </h3>
              <ol className="mt-4 list-inside space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">1.</span>
                  Actively contribute to ongoing research and development
                  initiatives.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">2.</span>
                  Uphold the core values and ethical standards of the center.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">3.</span>
                  Participate in CHCI meetings, seminars, and collaborative
                  activities.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">4.</span>
                  Mentor and support student members and junior researchers.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">5.</span>
                  Represent CHCI positively in external engagements and
                  partnerships.
                </li>
              </ol>

              <hr className="my-8 border-border" />

              {/* Termination */}
              <h3 className="font-heading text-lg font-bold text-primary">
                Termination of Membership
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Voluntary resignation submitted in writing to the Center Chief.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Failure to fulfill membership duties for two consecutive
                  semesters.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Violation of the center&apos;s code of conduct or ethical
                  guidelines.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Separation from Caraga State University (for Regular Members).
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
