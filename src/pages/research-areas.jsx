import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const researchAreas = [
  {
    image: "/research-areas/multisensory.png",
    title: "Multi-sensory Computing",
    description:
      "Exploring the integration of multiple sensory modalities in computing systems to create immersive and intuitive human-computer interfaces.",
    alignments: [
      { label: "CSU LIKHA Agenda", value: "4" },
      { label: "SDG", value: "4, 3" },
      { label: "AN2040", value: "2" },
      { label: "i2FAME RDP", value: "1, 2, 3" },
    ],
  },
  {
    image: "/research-areas/gaming.png",
    title: "Gaming Science",
    description:
      "Advancing the science of game design and development, focusing on engagement, learning outcomes, and therapeutic applications.",
    alignments: [
      { label: "CSU LIKHA Agenda", value: "3" },
      { label: "SDG", value: "4, 9" },
      { label: "AN2040", value: "1" },
      { label: "i2FAME RDP", value: "2, 4" },
    ],
  },
  {
    image: "/research-areas/multimedia.png",
    title: "Multimedia Science",
    description:
      "Research on digital media creation, processing, and distribution technologies for enhanced communication and storytelling.",
    alignments: [
      { label: "CSU LIKHA Agenda", value: "2" },
      { label: "SDG", value: "4, 11" },
      { label: "AN2040", value: "3" },
      { label: "i2FAME RDP", value: "1, 5" },
    ],
  },
  {
    image: "/research-areas/cyber.png",
    title: "Cyber Intelligence Computing",
    description:
      "Developing intelligent systems for cybersecurity, threat detection, and digital forensics to protect communities and institutions.",
    alignments: [
      { label: "CSU LIKHA Agenda", value: "5" },
      { label: "SDG", value: "9, 16" },
      { label: "AN2040", value: "4" },
      { label: "i2FAME RDP", value: "3, 6" },
    ],
  },
  {
    image: "/research-areas/development.png",
    title: "Computing for Development",
    description:
      "Leveraging computing technologies to address societal challenges and promote inclusive growth in underserved communities.",
    alignments: [
      { label: "CSU LIKHA Agenda", value: "1" },
      { label: "SDG", value: "1, 10, 17" },
      { label: "AN2040", value: "5" },
      { label: "i2FAME RDP", value: "4, 7" },
    ],
  },
]

export function ResearchAreasSection() {
  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto px-25">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Research <span className="text-primary">Areas</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
          Our research spans five key areas, aligned with national and global development agendas.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => (
            <Card
              key={area.title}
              className="border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <CardTitle className="text-xl text-card-foreground">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.alignments.map((alignment) => (
                    <Badge
                      key={alignment.label}
                      variant="secondary"
                      className="text-xs"
                    >
                      {alignment.label}: {alignment.value}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
