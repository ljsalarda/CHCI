export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Know More about <span className="text-primary">CHCI</span>
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              The Center for Human-Computer Interaction (CHCI) at Caraga State University 
              is a pioneering research center dedicated to advancing the frontiers of 
              computing through human-centric design and innovation.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our interdisciplinary team of researchers, designers, and engineers 
              work collaboratively to create technologies that bridge intelligent systems 
              and human needs, fostering inclusive development and empowering communities 
              across the Caraga region and beyond.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/OlJuSZeyug8"
              title="CHCI Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
