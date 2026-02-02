import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-26">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Know More about <span className="text-primary">CHCI</span>
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              The Center for Human-Computer Interaction (CHCI) at Caraga State
              University is a pioneering research center dedicated to advancing
              the frontiers of computing through human-centric design and
              innovation.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our interdisciplinary team of researchers, designers, and
              engineers work collaboratively to create technologies that bridge
              intelligent systems and human needs, fostering inclusive
              development and empowering communities across the Caraga region
              and beyond.
            </p>
            <div className="pt-6">
              <Button 
                size="lg"
                className="gap-2 text-base px-6 py-5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                Know More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/OlJuSZeyug8?autoplay=1&mute=1&playsinline=1"
              title="CHCI Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
