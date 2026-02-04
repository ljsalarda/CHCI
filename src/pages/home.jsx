export function HeroSection() {
  return (
    <section id="home" className="relative  flex items-center justify-center overflow-hidden py-32">
      {/* Gradient background with animation */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-primary/10" />
      
      <div className="container relative mx-auto px-4 py-auto text-center z-10">
        <div className="mx-auto max-w-5xl space-y-8">

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-balance leading-tight">
              Center for{" "}
              <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Human-Computer
              </span>
              <br />
              Interaction
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-light text-muted-foreground italic">
            &ldquo;Humanizing Technology&rdquo;
          </p>

          {/* Stats section */}
          <div className="pt-12 grid grid-cols-3 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: "5", label: "Research Areas", link: "#research" },
              { number: "0", label: "Publications" },
              { number: "4", label: "Projects", link: "#projects" },
              { number: "6", label: "Partners", link: "#partners" },
            ].map((stat) => (
              <a 
                key={stat.label}
                href={stat.link || "#"}
                onClick={(e) => {
                  if (!stat.link) {
                    e.preventDefault()
                  }
                }}
                className={`space-y-1 p-3 rounded-lg transition-colors ${
                  stat.link ? "cursor-pointer hover:bg-primary/10" : "hover:bg-primary/5"
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </section>
  )
}
