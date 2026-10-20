export function LogoMarquee() {
  const items = [
    { logo: "/logos/application.svg", alt: "application" },
    { logo: "/logos/business.svg", alt: "business" },
    { logo: "/logos/company.svg", alt: "company" },
    { logo: "/logos/startup.svg", alt: "startup" },
    { logo: "/logos/venture.svg", alt: "venture" },
    { logo: "/logos/agency.svg", alt: "agency" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-8 md:py-16 -rotate-[5deg] mt-16 md:mt-32 mb-10 md:mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-8 sm:gap-12 md:gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <img key={index} src={item.logo || "/placeholder.svg"} alt={item.alt} className="h-8 sm:h-10 md:h-12 w-auto" />
          ))}
        </div>
      </div>
    </div>
  )
}
