"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Smart Campus Initiative",
    partner: "Department of Science and Technology",
    description:
      "Implementing IoT solutions across campus to enhance learning environments and optimize resource usage.",
  },
  {
    title: "Digital Literacy Program",
    partner: "Commission on Higher Education",
    description:
      "Empowering communities with essential digital skills through comprehensive training programs.",
  },
  {
    title: "Assistive Technology Lab",
    partner: "National Council on Disability Affairs",
    description:
      "Developing accessible technologies to support individuals with disabilities in education and employment.",
  },
  {
    title: "Caraga Data Hub",
    partner: "Philippine Statistics Authority",
    description:
      "Building a regional data infrastructure for evidence-based policy making and development planning.",
  },
  {
    title: "Youth Tech Incubator",
    partner: "Department of Trade and Industry",
    description:
      "Nurturing the next generation of tech entrepreneurs through mentorship and resources.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Our <span className="text-primary">Partners & Projects</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
          Collaborating with leading institutions to drive innovation and impact.
        </p>
        <div className="mx-auto max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-border bg-card">
                    <CardHeader>
                      <CardDescription className="text-primary">
                        {project.partner}
                      </CardDescription>
                      <CardTitle className="text-lg text-card-foreground">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-fit gap-2 bg-transparent">
                        View Project
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
