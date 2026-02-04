import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-24">
      {/* Adjusted container padding: px-4 (mobile) -> px-8 (tablet) -> px-12 (desktop) */}
      <div className="container mx-auto px-4 md:px-8 lg:px-26">
        {/* Adjusted grid gap: gap-8 (mobile) -> gap-16 (desktop) */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:mb-6 md:text-3xl lg:text-4xl">
              Know More about <span className="text-primary">CHCI</span>
            </h2>
            
            <p className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              The Center for Human-Computer Interaction (CHCI) at Caraga State
              University is a pioneering research center dedicated to advancing
              the frontiers of computing through human-centric design and
              innovation.
            </p>
            
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Our interdisciplinary team of researchers, designers, and
              engineers work collaboratively to create technologies that bridge
              intelligent systems and human needs, fostering inclusive
              development and empowering communities across the Caraga region
              and beyond.
            </p>
            
            <div className="pt-6 md:pt-8">
              <Button 
                size="lg"
                className="w-full sm:w-auto gap-2 text-base px-6 py-5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                Know More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Video Content */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm">
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