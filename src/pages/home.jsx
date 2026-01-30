import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="container relative mx-auto px-4 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            CSU - Center for{" "}
            <span className="text-primary">Human-Computer Interaction</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            &ldquo;Humanizing Technology.&rdquo;
          </p>
          <Button size="lg" className="gap-2 text-lg">
            Explore CHCI
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  )
}
