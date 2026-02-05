import { ChevronDown } from "lucide-react"

export function PersonnelSection() {
  const units = [
    { name: "Multi-Sensory Computing Unit", image: "/MSC.png" },
    { name: "Gaming Science Unit", image: "/GS.png" },
    { name: "Cyber Intelligence Computing Unit", image: "/CIC.png" },
    { name: "Computing for Development Unit", image: "/CFD.png" },
    { name: "Multimedia Science Unit", image: "/MS.png" }
  ]

  return (
    <section id="personnel" className="py-16 bg-linear-to-b from-white to-[#0A3D91]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D91] mb-3">
            Personnel
          </h2>
          <div className="h-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3] w-24 mx-auto rounded-full" />
        </div>

        {/* Org Chart */}
        <div className="flex flex-col items-center">
          {/* University President */}
          <div className="relative group mb-2">
            <div className="absolute -inset-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3] rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300" />
            <div className="relative w-40 py-4 px-8 border border-[#0A3D91] rounded-xl bg-white text-center font-bold text-[#0A3D91] shadow-lg hover:shadow-xl transition-shadow">
              University<br />President
            </div>
          </div>
          
          <ChevronDown className="w-6 h-6 text-[#3A7CC3] mb-2" />
          
          {/* VP for RIE */}
          <div className="relative group mb-2">
            <div className="absolute -inset-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3] rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300" />
            <div className="relative w-40 py-4 px-8 border border-[#3A7CC3] rounded-xl bg-white text-center font-bold text-[#0A3D91] shadow-lg hover:shadow-xl transition-shadow">
              VP for RIE
            </div>
          </div>
          
          <ChevronDown className="w-6 h-6 text-[#3A7CC3] mb-2" />
          
          {/* RDISO */}
          <div className="relative group mb-2">
            <div className="absolute -inset-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3] rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300" />
            <div className="relative w-40 py-4 px-8 border border-[#0A3D91] rounded-xl bg-white text-center font-bold text-[#0A3D91] shadow-lg hover:shadow-xl transition-shadow">
              RDISO
            </div>
          </div>
          
          <ChevronDown className="w-6 h-6 text-[#3A7CC3] mb-2" />
          
          {/* CHCI Center Chief */}
          <div className="relative group mb-6">
            <div className="absolute -inset-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3] rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition duration-300" />
            <div className="relative w-41 py-4 px-8 border border-[#0A3D91] rounded-xl bg-linear-to-br from-[#0A3D91] to-[#3A7CC3] text-center font-bold text-white shadow-xl hover:shadow-2xl transition-shadow">
              CHCI Center<br />Chief
            </div>
          </div>
          
          {/* Units Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-6xl">
            {units.map((unit, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3] rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
                <div className="relative p-2 rounded-xl bg-white border border-[#3A7CC3] text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col items-center justify-center gap-3">
                  <img src={unit.image} alt={unit.name} className="w-18 h-10 object-contain" />
                  <span className="font-bold text-sm text-[#0A3D91] leading-tight">
                    {unit.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
