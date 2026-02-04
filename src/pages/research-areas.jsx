const researchAreas = [
  {
    image: "/MSC.png",
    title: "Multi-sensory Computing",
    description:
      "Exploring the integration of multiple sensory modalities in computing systems to create immersive and intuitive human-computer interfaces.",
  },
  {
    image: "/GS.png",
    title: "Gaming Science",
    description:
      "Advancing the science of game design and development, focusing on engagement, learning outcomes, and therapeutic applications.",
  },
  {
    image: "/MS.png",
    title: "Multimedia Science",
    description:
      "Research on digital media creation, processing, and distribution technologies for enhanced communication and storytelling.",
  },
  {
    image: "/CIC.png",
    title: "Cyber Intelligence Computing",
    description:
      "Developing intelligent systems for cybersecurity, threat detection, and digital forensics to protect communities and institutions.",
  },
  {
    image: "/CFD.png",
    title: "Computing for Development",
    description:
      "Leveraging computing technologies to address societal challenges and promote inclusive growth in underserved communities.",
  },
]

export function ResearchAreasSection() {
  return (
    <section id="research" className="py-10">
      <div className="container mx-auto px-30">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Research Areas
          </h2>
          <div className="w-16 h-1 bg-[#0A3D91] mx-auto" />
        </div>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {researchAreas.slice(0, 3).map((area, index) => (
            <div
              key={area.title}
              className="group text-center"
            >
              {/* Image with border animation */}
              <div className="relative mx-auto w-28 h-28 mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-[#0A3D91]/20 group-hover:border-[#0A3D91] transition-colors duration-300" />
                <div className="absolute inset-2 rounded-full border border-[#3A7CC3]/30 group-hover:border-[#3A7CC3] transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src={area.image || "/placeholder.svg"} 
                    alt={area.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-[#0A3D91] transition-colors">
                {area.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm  text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mt-12 max-w-3xl mx-auto">
          {researchAreas.slice(3).map((area, index) => (
            <div
              key={area.title}
              className="group text-center col-span-2 lg:col-span-2"
            >
              {/* Image with border animation */}
              <div className="relative mx-auto w-28 h-28 mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-[#0A3D91]/20 group-hover:border-[#0A3D91] transition-colors duration-300" />
                <div className="absolute inset-2 rounded-full border border-[#3A7CC3]/30 group-hover:border-[#3A7CC3] transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src={area.image || "/placeholder.svg"} 
                    alt={area.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-[#0A3D91] transition-colors">
                {area.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed ">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
