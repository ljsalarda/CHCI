import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-25">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Our <span className="text-primary">Vision & Mission</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To be the premier driver of human-centric computing innovation in Caraga, 
                elevating CSU as a global leader at the convergence of science, technology, 
                and the arts.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To advance the frontiers of computing by engineering human-centric technologies 
                that bridge intelligent systems and human needs; fostering interdisciplinary 
                research that transforms lives, empowers communities, and drives inclusive development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
