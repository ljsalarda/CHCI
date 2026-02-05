"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Personnel", href: "#personnel" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "" },
  { name: "Contact Us", href: "#contact" },
];

export function StickyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logos */}
        <div className="flex-1 flex justify-start lg:justify-start lg:ml-15 md:justify-center">
          {/* <a href="#">
            <img src="/CCIS-LOGO.png" alt="CCIS Logo" className="w-11" />
          </a> */}
          <a href="#">
            <img src="/CHCI-LOGO.png" alt="CHCI Logo" className="w-30" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-1 md:flex lg:gap-4 mr-16">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <a href={item.href}>{item.name}</a>
            </Button>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-70 bg-white p-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
