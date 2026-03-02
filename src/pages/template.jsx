import { StickyNavbar } from "@/components/navbar";

function ImageWithUrl({ src, alt, className = "h-56 w-full object-cover" }) {
  if (!src) return null;

  return (
    <div className="mt-6">
      <div className="overflow-hidden rounded-xl border border-border bg-muted/30">
        <img src={src} alt={alt || "Section image"} className={className} />
      </div>
      <p className="mt-2 break-all text-xs text-muted-foreground">
        Image URL: <span className="font-mono">{src}</span>
      </p>
    </div>
  );
}

function SectionHeader({ eyebrow, title }) {
  if (!eyebrow && !title) return null;

  return (
    <div className="mx-auto mb-8 max-w-3xl text-center space-y-2">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      ) : null}
      {title ? <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2> : null}
    </div>
  );
}

function TextSection({ eyebrow, title, text, image }) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 md:p-8">
        <p className="leading-relaxed text-muted-foreground">{text}</p>
        <ImageWithUrl src={image} alt={title} />
      </div>
    </section>
  );
}

function ListSection({ eyebrow, title, items = [] }) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 md:p-8">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={`${typeof item === "string" ? item : item?.text || item?.title || index}-${index}`}
              className="text-muted-foreground"
            >
              <div className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span className="leading-relaxed">
                  {typeof item === "string" ? item : item?.text || item?.title}
                </span>
              </div>
              {typeof item === "object" ? <ImageWithUrl src={item.image} alt={item?.title} /> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeatureGridSection({ eyebrow, title, items = [] }) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            <ImageWithUrl src={item.image} alt={item.title} className="h-44 w-full object-cover" />
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutVideoSection({
  eyebrow,
  title,
  heading,
  text,
  image,
  videoUrl,
  videoTitle,
  actions = [],
}) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            {heading ? <h3 className="mb-3 text-xl font-semibold text-foreground">{heading}</h3> : null}
            <p className="text-base leading-relaxed text-muted-foreground">{text}</p>

            {actions.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {actions.map((action) => (
                  <a
                    key={action.href}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            ) : null}

            <ImageWithUrl src={image} alt={title} className="h-44 w-full object-cover" />
          </div>

          {videoUrl ? (
            <div className="overflow-hidden rounded-xl border border-border">
              <div className="aspect-video">
                <iframe
                  src={videoUrl}
                  title={videoTitle || title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

const sectionRenderers = {
  about_video: AboutVideoSection,
  feature_grid: FeatureGridSection,
  list: ListSection,
  text: TextSection,
};

function UnknownSection({ type }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8 text-center">
      <p className="text-sm text-muted-foreground">Unsupported section type: {type}</p>
    </section>
  );
}

export function ProjectTemplate({ project }) {
  if (!project) return null;

  return (
    <section id={project.slug} className="relative bg-linear-to-b from-white via-blue-50/40 to-white">
      <StickyNavbar />

      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center"
        style={{ backgroundImage: `url('${project.hero?.backgroundImage || ""}')` }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-6xl">
          {project.hero?.subtitle ? (
            <p className="mb-5 text-sm font-semibold uppercase text-white/90">{project.hero.subtitle}</p>
          ) : null}

          {project.hero?.title ? (
            <h1 className="text-3xl font-bold text-white md:text-5xl">{project.hero.title}</h1>
          ) : null}

          {project.hero?.location ? (
            <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-white/85 md:text-sm">
              {project.hero.location}
            </p>
          ) : null}

          {project.hero?.backgroundImage ? (
            <p className="mx-auto mt-4 max-w-3xl break-all text-xs text-white/80">
              Background URL:{" "}
              <span className="font-mono">{project.hero.backgroundImage}</span>
            </p>
          ) : null}

          {project.hero?.cta?.href ? (
            <a
              href={project.hero.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
            >
              {project.hero.cta.label || "Learn More"}
            </a>
          ) : null}
        </div>
      </div>

      <div className="pb-16">
        {(project.sections || []).map((section, index) => {
          const Renderer = sectionRenderers[section.type];
          if (!Renderer) {
            return <UnknownSection key={`${section.type}-${index}`} type={section.type} />;
          }
          return <Renderer key={`${section.type}-${index}`} {...section} />;
        })}
      </div>
    </section>
  );
}

export default ProjectTemplate;
