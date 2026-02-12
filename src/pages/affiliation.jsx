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
            <p>To maintain a culture of high performance, membership in the Center is privilege-based and output-oriented. It is open to individuals who demonstrate active engagement in the Center’s research agenda.</p>
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
                    <ul className="mt-2 list-disc list-outside pl-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
                        <li>Full-time faculty members of the College of Computing and Information Sciences (CCIS) whose primary research interest aligns with one of the 5 Pillars.</li>
                        <li>Must have at least one (1) ongoing research project registered under the Center or a published paper in the last academic year related to HCI.</li>
                        <li>Eligible to be appointed as Unit Heads and vote on internal policy matters.</li>
                    </ul>
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
                    <ul className="mt-2 list-disc list-outside pl-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
                        <li>Faculty members from other colleges (e.g., Engineering, Arts & Sciences) or external industry partners collaborating on specific projects.</li>
                        <li>Invitation by a Unit Head for the duration of a specific project or grant.</li>
                        <li>Specific access to Center resources relevant to their project; non-voting status.</li>
                    </ul>
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
                     <ul className="mt-2 list-disc list-outside pl-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
                        <li>Undergraduate or Graduate students currently conducting their thesis/capstone projects or any research-related activities for the Center under the supervision of a Primary Member.</li>
                        <li>Acceptance of their research proposal by the Center’s Research Committee.</li>
                        <li>Access to laboratory facilities during designated hours.</li>
                    </ul>
                  </div>
                </li>
              </ul>

              {/* Divider */}
              <hr className="my-8 border-border" />

              {/* Rights and Privileges */}
              <h3 className="font-heading text-lg font-bold text-primary">
                Rights and Privileges
              </h3>
              <p>Members in good standing are entitled to:</p>
              <ol className="mt-4 list-inside space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">1.</span>
                  Priority use of the CHCI Laboratory, including specialized equipment (VR headsets, sensors, high-performance computing units).
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">2.</span>
                  Endorsement for internal university funding and administrative support for external grant applications.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">3.</span>
                  Priority slots for training, workshops, and certification programs funded, organized, initiated or supported by the Center.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">4.</span>
                  Right to be credited in publications and intellectual property filings resulting from their contributions.
                </li>
              </ol>

              <hr className="my-8 border-border" />

              {/* Duties and Responsibilities */}
              <h3 className="font-heading text-lg font-bold text-primary">
                Duties and Responsibilities
              </h3>
              <p>To retain membership, individuals must:</p>
              <ol className="mt-4 list-inside space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">1.</span>
                  Acquire or be part of an externally/internally-funded research projects recognized by the OVPRIE.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">2.</span>
                  Produce at least one (1) research output (publication, prototype, copyright or IP application) annually.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">3.</span>
                  Mentor or actively supervise Student Researchers within the Center.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">4.</span>
                  Participate in the activities and Annual Strategic Planning and the HCI Summit.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">5.</span>
                  Acknowledge the "Center for Human-Computer Interaction (CHCI)" as their affiliation in all relevant publications and presentations.
                </li>
              </ol>

              <hr className="my-8 border-border" />

              {/* Termination */}
              <h3 className="font-heading text-lg font-bold text-primary">
                Termination of Membership
              </h3>
              <p>Membership or affiliation may be revoked or suspended by the Center’s Research Committee upon approval of the Director for:</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Failure to comply the duties and responsibilities.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  VViolation of research ethics, data privacy laws, or misuse of Center assets.
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
