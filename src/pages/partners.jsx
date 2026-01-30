"use client"

const partners = [
  { name: "DOST", img: "/dost.jpg" },
  { name: "CSU", img: "/CSU.png" },
  { name: "DOA", img: "/DOA.png" },
  { name: "TMC", img: "/tmc.png" },
  { name: "APEX", img: "/apex.png" },
  { name: "DSWD", img: "/dswd.png" },
]

export function PartnersSection() {
  return (
    <section id="partners" className="container-fluid skill">
      <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Our <span className="text-primary">Partners</span>
        </h2>

      <div className="partners mx-auto max-w-7xl py-4" data-aos="fade-up">
        <div className="partners-wrapper">
          
          {/* First slide */}
          <div className="partners-slide">
            {partners.map((partner) => (
              <div key={partner.name} className="partner-item">
                <img src={partner.img} alt={partner.name} />
                <p>{partner.name}</p>
              </div>
            ))}
          </div>

          {/* Second slide (duplicate for infinite loop effect) */}
          <div className="partners-slide">
            {partners.map((partner) => (
              <div key={partner.name + "-2"} className="partner-item">
                <img src={partner.img} alt={partner.name} />
                <p>{partner.name}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
