import {
  ShieldCheck,
  Scan,
  Upload,
  FileText,
  Sparkles,
  Search,
  Pencil,
  Hash,
  Droplets,
  Download,
  BarChart3,
  ScrollText,
  Monitor,
  Plug,
} from "lucide-react"

const features = [
  { icon: ShieldCheck, label: "Authentication & Authorization + CAPTCHA" },
  { icon: Scan, label: "Scan Documents" },
  { icon: Upload, label: "Upload Documents" },
  { icon: FileText, label: "Extract Text (OCR)" },
  { icon: Sparkles, label: "AI-enabled Classification" },
  { icon: Search, label: "Search Facility" },
  { icon: Pencil, label: "Manage Entries (Edit/Update/Delete)" },
  { icon: Hash, label: "Quick Response (QR) Code" },
  { icon: Droplets, label: "Watermark" },
  { icon: Download, label: "Export (PDF, CSV, Excel, Print)" },
  { icon: BarChart3, label: "Generate Reports & Statistics" },
  { icon: ScrollText, label: "Transaction Logs" },
  { icon: Monitor, label: "User-friendly GUI" },
  { icon: Plug, label: "API (Get Records, Put Records)" },
]

export function SmartFeatures() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                SMART features
            </p>
            <h2 className="text-center text-2xl font-bold md:text-3xl">
                System Features
            </h2>
          </div>

          {/* Main Card */}
          <div className="mt-12 p-6 md:p-10">
            <div className="grid items-center gap-10 md:grid-cols-2">
      <div className="grid grid-cols-2 gap-3">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.label}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-xs font-medium leading-tight text-card-foreground sm:text-sm">
                {f.label}
              </span>
            </div>
          )
        })}
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart2-Gxj3IZBK22CJIQtNf88kpc7R0ZOsOG.png"
          alt="SMART system interface showing document scanning/upload area with file thumbnails and classification form with region, division, section, and record classification selectors"
          className="w-full"
        />
      </div>
    </div>
    </div>
    </section>
  )
}
