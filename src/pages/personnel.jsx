export function PersonnelSection() {
  return (
    <section id="personnel" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Organizational Structure
          </h2>
          <div className="w-16 h-1 bg-[#0A3D91] mx-auto" />
        </div>

        {/* Org Chart */}
        <div className="flex flex-col items-center">
          {/* University President */}
          <div className="px-6 py-3 border-2 border-[#4a4a4a] rounded-lg bg-white text-center">
            <span className="font-semibold text-[#4a4a4a]">University<br />President</span>
          </div>
          
          {/* Connector line */}
          <div className="w-0.5 h-8 bg-[#4a4a4a]" />
          
          {/* VP for RIE */}
          <div className="px-6 py-3 border-2 border-[#9b4d96] rounded-lg bg-white text-center">
            <span className="font-semibold text-[#9b4d96]">VP for RIE</span>
          </div>
          
          {/* Connector line */}
          <div className="w-0.5 h-8 bg-[#4a4a4a]" />
          
          {/* RDISO */}
          <div className="px-6 py-3 border-2 border-[#4a8c4a] rounded-lg bg-white text-center">
            <span className="font-semibold text-[#4a8c4a]">RDISO</span>
          </div>
          
          {/* Connector line */}
          <div className="w-0.5 h-8 bg-[#4a4a4a]" />
          
          {/* CHCI Center Chief */}
          <div className="px-8 py-4 border-2 border-[#0A3D91] rounded-lg bg-white text-center">
            <span className="font-semibold text-[#0A3D91]">CHCI Center<br />Chief</span>
          </div>
          
          {/* Connector line down */}
          <div className="w-0.5 h-8 bg-[#0A3D91]" />
          
          {/* Horizontal connector line */}
          <div className="hidden md:block w-full max-w-4xl h-0.5 bg-[#0A3D91]" />
          
          {/* Five vertical connector lines - desktop */}
          <div className="hidden md:flex w-full max-w-4xl justify-between px-12">
            <div className="w-0.5 h-8 bg-[#0A3D91]" />
            <div className="w-0.5 h-8 bg-[#0A3D91]" />
            <div className="w-0.5 h-8 bg-[#0A3D91]" />
            <div className="w-0.5 h-8 bg-[#0A3D91]" />
            <div className="w-0.5 h-8 bg-[#0A3D91]" />
          </div>
          
          {/* Units - Desktop */}
          <div className="hidden md:grid grid-cols-5 gap-4 w-full max-w-5xl">
            <div className="px-3 py-4 border-2 border-[#0A3D91] rounded-lg bg-white text-center hover:bg-[#0A3D91]/5 transition-colors">
              <span className="text-sm font-semibold text-[#0A3D91]">Multi-Sensory<br />Computing Unit</span>
            </div>
            <div className="px-3 py-4 border-2 border-[#0A3D91] rounded-lg bg-white text-center hover:bg-[#0A3D91]/5 transition-colors">
              <span className="text-sm font-semibold text-[#0A3D91]">Gaming Science<br />Unit</span>
            </div>
            <div className="px-3 py-4 border-2 border-[#0A3D91] rounded-lg bg-white text-center hover:bg-[#0A3D91]/5 transition-colors">
              <span className="text-sm font-semibold text-[#0A3D91]">Cyber Intelligence<br />Computing Unit</span>
            </div>
            <div className="px-3 py-4 border-2 border-[#0A3D91] rounded-lg bg-white text-center hover:bg-[#0A3D91]/5 transition-colors">
              <span className="text-sm font-semibold text-[#0A3D91]">Computing for<br />Development Unit</span>
            </div>
            <div className="px-3 py-4 border-2 border-[#0A3D91] rounded-lg bg-white text-center hover:bg-[#0A3D91]/5 transition-colors">
              <span className="text-sm font-semibold text-[#0A3D91]">Multimedia<br />Science Unit</span>
            </div>
          </div>
          
          {/* Units - Mobile (stacked) */}
          <div className="md:hidden flex flex-col items-center gap-2 mt-4">
            {[
              "Multi-Sensory Computing Unit",
              "Gaming Science Unit",
              "Cyber Intelligence Computing Unit",
              "Computing for Development Unit",
              "Multimedia Science Unit"
            ].map((unit, index) => (
              <div key={unit}>
                {index > 0 && <div className="w-0.5 h-4 bg-[#0A3D91] mx-auto" />}
                <div className="px-6 py-3 border-2 border-[#0A3D91] rounded-lg bg-white text-center">
                  <span className="text-sm font-semibold text-[#0A3D91]">{unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
