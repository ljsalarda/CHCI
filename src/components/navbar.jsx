"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Contact Us", href: "#contact" },
];

export function StickyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky border-b top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex items-center justify-between">
        {/* Logos */}
        <div className="flex items-center mb-2">
          <a href="#">
            <img src="/CCIS-LOGO.png" alt="CCIS Logo" className="h-15" />
          </a>
          <a href="#">
            <img src="/CHCI-LOGO.png" alt="CHCI Logo" className="h-15" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              asChild
              className="text-gray-700 hover:text-black "
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
