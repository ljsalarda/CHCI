"use client"

const projects = [
  { name: "MARVEL", img: "/marvel.png" },
  { name: "GEOAGR", img: "/geoagr.png" },
  { name: "SMART", img: "/smart.png" },
  { name: "FAMRIA", img: "/famria.png" },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="container-fluid skill">
      <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Our <span className="text-primary">Projects</span>
        </h2>

      <div className="projects mx-auto max-w-7xl py-4" data-aos="fade-up">
        <div className="projects-wrapper">
          
          {/* First slide */}
          <div className="projects-slide">
            {projects.map((project) => (
              <div key={project.name} className="project-item">
                <img src={project.img} alt={project.name} />
                <p>{project.name}</p>
              </div>
            ))}
          </div>

          {/* Second slide (duplicate for infinite loop effect) */}
          <div className="projects-slide">
            {projects.map((project) => (
              <div key={project.name + "-2"} className="project-item">
                <img src={project.img} alt={project.name} />
                <p>{project.name}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
