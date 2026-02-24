import { Facebook } from "lucide-react";

export function SmartDescription() {
  return (
    <section className="  relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center space-y-3">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          SMART General Description
        </p>
        <h2 className="text-center text-2xl font-bold md:text-3xl">General Description</h2>
      </div>

      {/* Main Card */}
      <div className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <p>
              <h2 className="text-xl font-semibold mb-3">Project Overview</h2>A Records Management
              System was developed to assist the DSWD records officer and the organization itself
              for fast record tracking and to provide fast and efficient service. It is an
              application for digital archiving and indexing of documents. These documents are
              cataloged into five categories: administrative, financial, legal, personnel, and
              social services records. These records are vital in the organization and have a
              corresponding retention period where the documents could be disposed of as stipulated
              in the National Archives Policy of the Philippines.
            </p>
            <a
              href="https://www.facebook.com/csuchci/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Facebook className="h-4 w-4" />
              Visit our Facebook Page
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart-DUnsMAbz62p25Sx0NQvLdufIss27c4.png"
              alt="SMART system architecture showing Data Import, Data Process, Data Storage, and Data Management workflows with user authentication through SSO"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
