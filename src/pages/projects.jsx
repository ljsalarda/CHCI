import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/site-data";

export function ProjectsSection() {
  const listRef = useRef(null);

  const handleScrollProjects = (direction) => {
    const list = listRef.current;
    if (!list) return;

    const card = list.querySelector("[data-project-card]");
    const cardWidth = card ? card.getBoundingClientRect().width : 280;
    const gap = 24;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const isTablet = window.matchMedia("(min-width: 768px)").matches;
    const cardsPerStep = isDesktop ? 4 : isTablet ? 2 : 1;
    const amount = (cardWidth + gap) * cardsPerStep * direction;

    list.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 md:py-16 bg-linear-to-b from-white via-blue-50/40 to-white"
    >
      {/* Background Design Layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* left accent */}
        <div className="absolute top-20 -left-30 w-75 h-75 bg-[#3A7CC3]/20 rounded-full blur-3xl" />

        {/* right accent */}
        <div className="absolute bottom-10 -right-30 w-65 h-65 bg-[#0A3D91]/20 rounded-full blur-3xl" />

        {/* subtle tech grid overlay */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(#0A3D91_1px,transparent_1px),linear-gradient(90deg,#0A3D91_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative research initiatives driving technological advancement
          </p>
        </div>

        <div
          ref={listRef}
          className="mx-auto flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => {
            const link = project.href || project.route;
            const cardClass =
              "group relative flex w-full shrink-0 snap-start flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-card p-2 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-xl md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]";

            const content = (
              <>
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-5 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-4" />
                    <img
                      src={project.img}
                      alt={project.name}
                      className="h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-lg relative"
                    />
                  </div>

                  <div className="h-1 w-12 bg-linear-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </>
            );

            if (link) {
              return (
                <a
                  key={project.name}
                  href={link}
                  data-project-card
                  className={`${cardClass} cursor-pointer`}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={project.name} data-project-card className={`${cardClass} cursor-default`}>
                {content}
              </div>
            );
          })}
        </div>

        {projects.length > 4 ? (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => handleScrollProjects(-1)}
              aria-label="Previous projects"
              className="rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScrollProjects(1)}
              aria-label="Next projects"
              className="rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
