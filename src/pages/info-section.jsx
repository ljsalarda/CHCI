import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  GraduationCap,
  ClipboardList,
  Heart,
  Building2,
  Users,
  Award,
  Shield,
  FileText,
} from "lucide-react";

const infoItems = [
  {
    id: "location",
    icon: MapPin,
    title: "Location",
    content: (
      <div className="flex flex-col items-center justify-center mt-4 gap-4">
        <h3 className="text-center text-m text-foreground max-w-2xl">
          2nd Flr. Mechatronics Building, Caraga State University, Ampayon,
          Butuan City, Philippines, 8600
        </h3>
        <div className="rounded-xl overflow-hidden border border-border w-full max-w-xl h-64">
          <iframe
            title="CHCI location map"
            className="w-full h-full"
            loading="lazy"
            src="https://www.google.com/maps?q=Caraga%20State%20University%2C%20Ampayon%2C%20Butuan%20City%2C%20Philippines&z=15&output=embed"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    ),
  },
  {
    id: "admission",
    icon: GraduationCap,
    title: "Admission",
    content:
      "The CHCI welcomes applications from graduate students and researchers interested in human-computer interaction. Visit our admissions portal for requirements and deadlines.",
  },
  {
    id: "registrar",
    icon: ClipboardList,
    title: "Registrar",
    content:
      "For academic records, enrollment verification, and transcript requests, please contact the University Registrar's Office at registrar@carsu.edu.ph.",
  },
  {
    id: "guidance",
    icon: Heart,
    title: "Guidance",
    content:
      "The Guidance and Counseling Center provides support services for students, including career counseling, psychological support, and academic advising.",
  },
  {
    id: "president",
    icon: Building2,
    title: "Office of the President",
    content:
      "The Office of the University President oversees the strategic direction of CSU, including support for research centers like CHCI.",
  },
  {
    id: "follow",
    icon: Users,
    title: "Follow Us",
    content:
      "Stay connected with CHCI on social media: Facebook, Twitter, LinkedIn, and YouTube. Subscribe to our newsletter for the latest updates.",
  },
  {
    id: "certification",
    icon: Award,
    title: "Certification",
    content:
      "CHCI is recognized by the Commission on Higher Education (CHED) as a Center of Excellence in Computing Education.",
  },
  {
    id: "covid",
    icon: Shield,
    title: "COVID-19 Safety Seal",
    content:
      "CSU has been certified with the Safety Seal by the Department of the Interior and Local Government for compliance with health protocols.",
  },
  {
    id: "transparency",
    icon: FileText,
    title: "Transparency & FOI",
    content:
      "In compliance with the Freedom of Information (FOI) program, CSU maintains transparency in its operations. Access public documents through our FOI portal.",
  },
];

export function InfoSection() {
  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          <span className="text-primary">Information</span> Center
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
          Quick access to important university resources and information.
        </p>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {infoItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-border"
              >
                <AccordionTrigger className="hover:text-primary hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-11 text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className="px-4 py-2 text-sm">
            Transparency Seal
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm">
            Freedom of Information
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm">
            COVID-19 Safety Seal
          </Badge>
        </div>
      </div>
    </section>
  );
}
