import { Eye, Target } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-2 font-medium">
            What Drives Us
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Vision & Mission
          </h2>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div className="group relative h-full">
           
            <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-lg h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Vision</h3>
              </div>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-lg leading-relaxed text-muted-foreground flex-1">
                To be the premier driver of human-centric computing innovation in Caraga, 
                elevating CSU as a global leader at the convergence of science, technology, 
                and the arts.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative h-full">
            <div className="absolute inset-0 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform" />
            <div className="relative rounded-2xl p-8 md:p-10 shadow-lg h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-black">Mission</h3>
              </div>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-lg leading-relaxed text-black/70 flex-1">
                To advance the frontiers of computing by engineering human-centric technologies 
                that bridge intelligent systems and human needs; fostering interdisciplinary 
                research that transforms lives, empowers communities, and drives inclusive development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
