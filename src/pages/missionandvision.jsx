import { Eye, Target, HeartHandshake, Layers, Users } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <p className="text-sm uppercase tracking-widest text-primary mb-2 font-medium">
            What Drives Us
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Vision & Mission 
          </h2>
        </div>
        
        {/* Vision & Mission */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto mb-8">
          {/* Vision Card */}
          <div className="group h-full">
            <div className="bg-card rounded-xl p-8 shadow-sm h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Vision</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground flex-1">
                To be the premier driver of human-centric computing innovation in Caraga, 
                elevating CSU as a global leader at the convergence of science, technology, 
                and the arts.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group h-full">
            <div className="bg-card rounded-xl p-8 shadow-sm h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mission</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground flex-1">
                To advance the frontiers of computing by engineering human-centric technologies 
                that bridge intelligent systems and human needs; fostering interdisciplinary 
                research that transforms lives, empowers communities, and drives inclusive development.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Core Values <span className="text-primary">(The HCI Way)</span>
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            
            {/* H */}
            <div className="bg-card rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-primary">
                  H — Human-Centricity
                </h4>
              </div>
              <p className="text-muted-foreground">
                <span className="font-semibold">We Design for People First.</span><br />
                Technology must adapt to human needs, not the other way around.
                Uphold ethical intelligence and empathy as the foundation of every system.
              </p>
            </div>

            {/* C */}
            <div className="bg-card rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Layers className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-primary">
                  C — Convergence
                </h4>
              </div>
              <p className="text-muted-foreground">
                <span className="font-semibold">We Bridge Disciplines.</span><br />
                Merge the logic of Science & Engineering with the creativity of the Arts.
                Treat code and design as equal partners in driving innovation.
              </p>
            </div>

            {/* I */}
            <div className="bg-card rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-primary">
                  I — Inclusive Impact
                </h4>
              </div>
              <p className="text-muted-foreground">
                <span className="font-semibold">We Leave No One Behind.</span><br />
                Committed to Social Engagement (C4D), bridging the digital divide and
                creating tangible value for the communities of Caraga and beyond.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
