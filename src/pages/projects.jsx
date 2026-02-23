import { projects } from "../data/site-data";

export function ProjectsSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => {
            const link = project.href || project.route;
            const cardClass =
              "group relative flex flex-col items-center justify-center p-2 rounded-xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden";

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

                  <h3 className="text-center font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>

                  <div className="h-1 w-12 bg-linear-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </>
            );

            if (link) {
              return (
                <a key={project.name} href={link} className={`${cardClass} cursor-pointer`}>
                  {content}
                </a>
              );
            }

            return (
              <div key={project.name} className={`${cardClass} cursor-default`}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
