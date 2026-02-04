import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Contact Us", href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/csuchci",
  },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/jaymer-jayoma-33872362/" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@csuchcidepartment8354" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-25 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <img
                  src="/CCIS-LOGO.png"
                  alt="CCIS logo"
                  className="h-32 w-32 object-contain"
                />
              </div> */}
              <div className="flex items-center justify-center rounded-lg bg-primary">
                <img
                  src="/CSU-LOGO.png"
                  alt="CSU logo"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div className="flex items-center justify-center rounded-lg bg-primary">
                <img
                  src="/CHCI-LOGO.png"
                  alt="CHCI logo"
                  className="w-32 object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              CSU – Center for Human-Computer Interaction at Caraga State
              University. Humanizing Technology.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>
                  2nd Flr. Mechatronics Building, Caraga State University,
                  Ampayon, Butuan City, Philippines, 8600
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 text-secondary" />
                <span>chci@carsu.edu.ph</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+63 981 518 9143</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-primary hover:bg-primary hover:text-white"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Center for Human-Computer Interaction
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
