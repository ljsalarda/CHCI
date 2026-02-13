import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Contact Us", href: "#contact" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/csuchci" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jaymer-jayoma-33872362/",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@csuchcidepartment8354",
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-primary-foreground/15 bg-primary text-primary-foreground"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/4 p-5 text-center sm:text-left lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <div className="mb-4 flex items-center justify-center gap-2 sm:justify-start">
              <a href="https://www.carsu.edu.ph/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/CSU-LOGO.png"
                  alt="CSU logo"
                  className="h-12 w-12 object-contain transition-transform hover:scale-105"
                />
              </a>
              <a href="#home">
                <img
                  src="/CHCI-LOGO.png"
                  alt="CHCI logo"
                  className="h-10 object-contain transition-transform hover:scale-105"
                />
              </a>
            </div>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-primary-foreground/80 sm:mx-0 sm:max-w-none">
              CSU - Center for Human-Computer Interaction at Caraga State University. Humanizing
              Technology.
            </p>
          </div>

          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/4 p-5 text-center sm:text-left lg:justify-items-center lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/4 p-5 text-center sm:text-left lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>
                  2nd Flr. Mechatronics Building, Caraga State University, Ampayon, Butuan City,
                  Philippines, 8600
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

          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/4 p-5 text-center sm:text-left lg:justify-items-center lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Follow Us
            </h3>
            <div className="flex justify-center gap-3 sm:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-secondary/40 bg-secondary/90 text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 md:mt-12 md:pt-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-center text-sm text-primary-foreground/80 sm:text-left">
              © {new Date().getFullYear()} Center for Human-Computer Interaction
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-primary-foreground/80 hover:text-secondary">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/80 hover:text-secondary">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
