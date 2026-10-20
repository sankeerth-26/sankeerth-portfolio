import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Hackathons",
      title: "Participated in 10 Hackathons",
      description:
        "Participated in 10 hackathons, gaining experience in rapid problem-solving, teamwork, prototyping, and building solutions under time constraints.",
      icon: "/placeholder.svg",
    },
    {
      period: "FOXI Studio",
      title: "Independent Creative Venture",
      description:
        "An early-stage initiative exploring the creation of Indian manga and original storytelling. The project is currently paused while exploring resources and funding opportunities.",
      icon: "/placeholder.svg",
    },
    {
      period: "Learning & Building",
      title: "Continuous Learning",
      description:
        "Continuously exploring Data Science, Machine Learning, Artificial Intelligence, and related technologies through projects, experimentation, and hands-on learning.",
      icon: "/placeholder.svg",
    },
  ]

  return (
    <section id="experience" className="bg-black py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-[1.3]">
              Challenges &{" "}
              <span className="bg-[#6366F1] text-white px-2.5 py-0.5 md:px-3 md:py-1 inline-block">Activities</span>
            </h2>
            <p className="text-gray-400 mb-6 md:mb-10 leading-relaxed text-sm sm:text-base md:text-lg">
              Exploring, building, and participating — a look at what keeps me driven outside the classroom.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-[20px] sm:rounded-3xl min-h-0 md:min-h-[240px]">
                <div className="flex items-center justify-between mb-3 md:mb-6 pt-5 px-5 sm:pt-6 sm:px-6 md:pt-8 md:px-8">
                  <div className="text-sm sm:text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.title}
                      width={48}
                      height={48}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-3 md:mb-6"></div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
                  <h3 className="text-lg sm:text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#393939] text-sm sm:text-base md:text-[18px] lg:text-[20px] leading-relaxed md:leading-[32px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
