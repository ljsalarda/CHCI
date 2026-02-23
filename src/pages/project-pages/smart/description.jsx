import { Facebook } from "lucide-react"

export function SmartDescription() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <p className="text-base leading-relaxed text-muted-foreground">
          A Records Management System was developed to assist the DSWD records
          officer and the organization itself for fast record tracking and to
          provide fast and efficient service. It is an application for digital
          archiving and indexing of documents. These documents are cataloged into
          five categories: administrative, financial, legal, personnel, and
          social services records. These records are vital in the organization
          and have a corresponding retention period where the documents could be
          disposed of as stipulated in the National Archives Policy of the
          Philippines.
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart-DUnsMAbz62p25Sx0NQvLdufIss27c4.png"
          alt="SMART system architecture showing Data Import, Data Process, Data Storage, and Data Management workflows with user authentication through SSO"
          className="w-full"
        />
      </div>
    </div>
  )
}
