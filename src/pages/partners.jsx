"use client"

import { partners } from "../data/site-data";

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 container-fluid skill">
      <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Our <span className="text-primary">Partners</span>
        </h2>

      <div className="partners mx-auto max-w-7xl py-4" data-aos="fade-up">
        <div className="partners-wrapper">
          
           {/* First slide */}
          <div className="partners-slide">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-item"
              >
                <img src={partner.img} alt={partner.name} />
                <p>{partner.name}</p>
              </a>
            ))}
          </div>

          {/* Second slide */}
          <div className="partners-slide">
            {partners.map((partner) => (
              <a
                key={partner.name + "-2"}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-item"
              >
                <img src={partner.img} alt={partner.name} />
                <p>{partner.name}</p>
              </a>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
