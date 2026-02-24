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
import CertImg from "/CSU_PAB_Certification001.png";
import CovidImg from "/CSU-Covid-19-Safety-Seal-1.jpg";
import FoiImg from "/foi.png";
import TsImg from "/ts.png";

const infoItems = [
  {
    id: "location",
    icon: MapPin,
    title: "Location",
    content: (
      <div className="flex flex-col items-center justify-center mt-4 gap-4">
        <h3 className="text-center text-m text-foreground max-w-2xl">
          2nd Flr. Mechatronics Building, Caraga State University, Ampayon, Butuan City,
          Philippines, 8600
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
    content: "oas@carsu.edu.ph | 09177078764 loc. 231",
  },
  {
    id: "registrar",
    icon: ClipboardList,
    title: "Registrar",
    content: "registrar.csumain@carsu.edu.ph | 09177078713 loc. 232",
  },
  {
    id: "guidance",
    icon: Heart,
    title: "Guidance",
    content: "guidance@carsu.edu.ph | 09177078769 loc. 252",
  },
  {
    id: "president",
    icon: Building2,
    title: "Office of the President",
    content: "op@carsu.edu.ph 09177078769 | 09177078713 | 09177078764 | loc. 201",
  },
  {
    id: "follow",
    icon: Users,
    title: "Follow Us",
    content:
      "https://www.facebook.com/csuchci chci@carsu.edu.ph https://www.youtube.com/@csuchcidepartment8354",
  },
  {
    id: "certification",
    icon: Award,
    title: "Certification",
    image: CertImg,
  },
  {
    id: "covid",
    icon: Shield,
    title: "COVID-19 Safety Seal",
    image: CovidImg,
  },
  {
    id: "transparency",
    icon: FileText,
    title: "Transparency & FOI",
    images: [FoiImg, TsImg],
  },
];

export function InfoSection() {
  return (
    <section id="events" className="py-16">
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
              <AccordionItem key={item.id} value={item.id} className="border-border">
                <AccordionTrigger className="hover:text-primary hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-11 text-muted-foreground">
                  {item.content && <div>{item.content}</div>}
                  {item.image && (
                    <div className="mt-4 flex justify-center">
                      <img src={item.image} alt={item.title} className="w-60 max-w-md rounded-lg" />
                    </div>
                  )}
                  {item.images && (
                    <div className="mt-4 flex justify-center flex-wrap gap-4">
                      {item.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${item.title}-${idx}`}
                          className="w-50 max-w-xs rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
