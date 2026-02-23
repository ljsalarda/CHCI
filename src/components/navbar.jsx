"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, X } from "lucide-react";

const projectItems = [
  { name: "MARVEL", href: "/marvel" },
  { name: "GEOAGR", href: "#projects" },
  { name: "SMART", href: "#projects" },
  { name: "FAMRIA", href: "/famria" },
];

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Research Areas", href: "#research" },
  { name: "Services", href: "#services" },
  { name: "Affiliation", href: "#affiliation" },
  { name: "Projects", href: "#projects", children: projectItems },
  { name: "Publications", href: "" },
  { name: "Contact Us", href: "#contact" },
];

export function StickyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const resolveHref = (href) => {
    if (!href) return href;
    if (href.startsWith("#") && pathname !== "/") return `/${href}`;
    return href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logos */}
        <div className="flex-1 flex justify-start lg:justify-start lg:ml-19 md:justify-center">
          <a href={resolveHref("#home")}>
            <img src="/CSU-LOGO.png" alt="CCIS Logo" className="w-8 mt-1 " />
          </a>
          <a href={resolveHref("#home")}>
            <img src="/CHCI-LOGO.png" alt="CHCI Logo" className="w-19 mt-2" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-1 md:flex lg:gap-4 mr-16">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.name} className="group relative">
                  <a
                    href={resolveHref(item.href)}
                    className="inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </a>
                  <div className="invisible absolute right-0 top-full z-50 mt-2 w-44 rounded-xl border border-border bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {item.children.map((project) => (
                      <a
                        key={project.name}
                        href={resolveHref(project.href)}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        {project.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className="text-muted-foreground hover:text-foreground"
              >
                <a href={resolveHref(item.href)}>{item.name}</a>
              </Button>
            );
          })}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-70 bg-white p-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={resolveHref(item.href)}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-blue-600"
                  >
                    {item.name}
                  </a>
                  {item.children && (
                    <div className="mt-2 border-l border-border pl-3">
                      <div className="flex flex-col gap-2">
                        {item.children.map((project) => (
                          <a
                            key={project.name}
                            href={resolveHref(project.href)}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-gray-700 hover:text-blue-600"
                          >
                            {project.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
