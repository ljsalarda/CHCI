"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";


const navItems = [
  { name: "Home", sectionId: "home" },
  { name: "About Us", sectionId: "about" },
  { name: "Research Areas", sectionId: "research" },
  { name: "Services", sectionId: "services" },
  { name: "Affiliation", sectionId: "affiliation" },
  { name: "Projects", sectionId: "projects"},
  { name: "Partners", sectionId: "partners" },
  { name: "Contact Us", sectionId: "contact" },
];

const NAVBAR_OFFSET = -64;
const SCROLL_DURATION_MS = 500;
const PROJECTS_SECTION_ID = "projects";
const DEFAULT_ACTIVE_SECTION = "home";

const combineClasses = (...classes) => classes.filter(Boolean).join(" ");

const getSectionScrollTop = (sectionId) => {
  const target = document.getElementById(sectionId);
  if (!target) return null;

  const nav = document.querySelector("header");
  const navOffset = nav ? nav.getBoundingClientRect().height : 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset;

  if (sectionId !== PROJECTS_SECTION_ID) {
    return targetTop;
  }

  const availableHeight = window.innerHeight - navOffset;
  const sectionHeight = target.getBoundingClientRect().height;
  const overflow = Math.max(sectionHeight - availableHeight, 0);

  return targetTop + overflow;
};

export function StickyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(DEFAULT_ACTIVE_SECTION);
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage || typeof window === "undefined") {
      return undefined;
    }

    const updateActiveSection = () => {
      const nav = document.querySelector("header");
      const navOffset = nav ? nav.getBoundingClientRect().height : 0;
      const marker = navOffset + Math.min(window.innerHeight * 0.35, 260);

      let nextActiveSection = DEFAULT_ACTIVE_SECTION;

      for (const item of navItems) {
        if (!item.sectionId) {
          continue;
        }

        const section = document.getElementById(item.sectionId);
        if (!section) {
          continue;
        }

        const { top } = section.getBoundingClientRect();
        if (top <= marker) {
          nextActiveSection = item.sectionId;
        }
      }

      setActiveSection(nextActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHomePage]);

  const getNavHref = (item) => {
    if (item.sectionId) {
      return item.sectionId === "home" ? "/" : `/?section=${item.sectionId}`;
    }
    return item.href || undefined;
  };

  const handleCloseMobile = (closeMobile) => {
    if (!closeMobile) return;
    setIsOpen(false);
  };

  const handleSectionScroll = (sectionId, closeMobile = false) => {
    const top = getSectionScrollTop(sectionId);
    if (top === null) return;

    setActiveSection(sectionId);
    window.scrollTo({ top, behavior: "smooth" });
    handleCloseMobile(closeMobile);
  };

  const renderNavLink = (item, className, activeClass, closeMobile = false, content = item.name) => {
    const resolvedClassName = combineClasses(
      className,
      isHomePage && item.sectionId === activeSection ? activeClass : "",
    );

    if (item.sectionId && isHomePage) {
      return (
        <button
          type="button"
          className={resolvedClassName}
          onClick={() => handleSectionScroll(item.sectionId, closeMobile)}
        >
          {content}
        </button>
      );
    }

    return (
      <a
        href={getNavHref(item)}
        className={resolvedClassName}
        onClick={() => handleCloseMobile(closeMobile)}
      >
        {content}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex min-h-16 w-full items-center gap-3 px-3 sm:px-5 lg:px-6 xl:px-8">
        {/* Logos */}
        <div className="ml-30 min-w-0 flex items-center gap-2 sm:gap-3">
          {isHomePage ? (
            <ScrollLink
              to="home"
              smooth
              duration={SCROLL_DURATION_MS}
              className="shrink-0 cursor-pointer"
            >
              <img src="/CSU-LOGO.png" alt="CCIS Logo" className="h-8 w-auto sm:h-9" />
            </ScrollLink>
          ) : (
            <a href="/" className="shrink-0">
              <img src="/CSU-LOGO.png" alt="CCIS Logo" className="h-8 w-auto sm:h-9" />
            </a>
          )}
          {isHomePage ? (
            <ScrollLink
              to="home"
              smooth
              duration={SCROLL_DURATION_MS}
              className="min-w-0 cursor-pointer"
            >
              <img src="/CHCI-LOGO.png" alt="CHCI Logo" className="h-8 w-auto sm:h-10" />
            </ScrollLink>
          ) : (
            <a href="/" className="min-w-0">
              <img src="/CHCI-LOGO.png" alt="CHCI Logo" className="h-8 w-auto sm:h-10" />
            </a>
          )}
        </div>

        {/* Desktop Menu */}
        <nav className="ml-auto hidden xl:flex xl:items-center xl:gap-1 2xl:gap-2">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.name} className="group relative">
                  {renderNavLink(
                    item,
                    "inline-flex h-10 items-center whitespace-nowrap px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primary cursor-pointer 2xl:px-4",
                    "text-foreground underline underline-offset-8 decoration-2 decoration-primary",
                    false,
                    <>
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </>,
                  )}
                  <div className="invisible absolute right-0 top-full z-50 mt-2 w-44 rounded-xl border border-border bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {item.children.map((project) => (
                      <a
                        key={project.name}
                        href={project.href}
                        className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-primary"
                      >
                        {project.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <React.Fragment key={item.name}>
                {renderNavLink(
                  item,
                  "inline-flex h-10 items-center whitespace-nowrap px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primary cursor-pointer 2xl:px-4",
                  "text-foreground underline underline-offset-8 decoration-2 decoration-primary",
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              className="ml-auto shrink-0"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(22rem,calc(100vw-1rem))] overflow-y-auto border-l border-border bg-white px-5 py-6 sm:w-80"
          >
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <img src="/CSU-LOGO.png" alt="CCIS Logo" className="h-9 w-auto" />
              <img src="/CHCI-LOGO.png" alt="CHCI Logo" className="h-10 w-auto" />
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {renderNavLink(
                    item,
                    "block px-3 py-3 text-base font-semibold text-gray-700 transition-colors hover:text-blue-700 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-700 cursor-pointer sm:text-lg",
                    "text-blue-700 underline underline-offset-4 decoration-2 decoration-blue-700",
                    true,
                  )}
                  {item.children && (
                    <div className="mt-2 border-l border-border pl-3">
                      <div className="flex flex-col gap-2">
                        {item.children.map((project) => (
                          <a
                            key={project.name}
                            href={project.href}
                            onClick={() => setIsOpen(false)}
                            className="px-2 py-2 text-base font-medium text-gray-700 transition-colors hover:text-blue-700 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-blue-700"
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
