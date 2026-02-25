import { Facebook } from "lucide-react";

export function GeoagriAbout() {
  return (
    <section className="  relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center space-y-3">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          GEOAGRI About
        </p>
        <h2 className="text-center text-2xl font-bold md:text-3xl">About</h2>
      </div>

      {/* Main Card */}
      <div className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              GEOAGRI is an in-house web-based system jointly developed by the Bureau of
              Agricultural and Fisheries Engineering and Caraga State University to consolidate the
              information of FMR projects. It is envisioned to be the common portal for all
              Government Agencies and Local Government Units (LGUs) implementing FMR which promotes
              transparency, governance, maximized resource allocation and minimized duplication and
              overlapping of projects.
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
          <div className="overflow-hidden rounded-xl border border-border">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/oYjpONIQnKA"
                title="GEOAGRI Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
