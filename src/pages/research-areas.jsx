import { researchAreas } from "../data/site-data";

export function ResearchAreasSection() {
  return (
    <section id="research" className="py-16 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              What We Study
            </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-3 mt-2">
            Research Priority Areas
          </h2>
          <div className="w-16 h-1 bg-[#0A3D91] mx-auto" />
        </div>
        
        <div className="flex flex-col items-center">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {researchAreas.slice(0, 3).map((area) => (
              <div key={area.title} className="group text-center p-6">
                {/* Image with border animation */}
                <div className="relative mx-auto w-28 h-28 mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-[#0A3D91]/20 group-hover:border-[#0A3D91] transition-colors duration-300" />
                  <div className="absolute inset-2 rounded-full border border-[#3A7CC3]/30 group-hover:border-[#3A7CC3] transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={area.image || "/placeholder.svg"}
                      alt={area.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-[#0A3D91] transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid gap-10 sm:grid-cols-2 mt-0 lg:w-2/3">
            {researchAreas.slice(3).map((area) => (
              <div key={area.title} className="group text-center p-6">
                <div className="relative mx-auto w-28 h-28 mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-[#0A3D91]/20 group-hover:border-[#0A3D91] transition-colors duration-300" />
                  <div className="absolute inset-2 rounded-full border border-[#3A7CC3]/30 group-hover:border-[#3A7CC3] transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={area.image || "/placeholder.svg"} alt={area.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-[#0A3D91] transition-colors">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
