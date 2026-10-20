"use client"

import { Mail, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function ServicesSection() {
  const [showMore, setShowMore] = useState(false)

  const services = [
    {
      title: "Data Science",
      description: "Exploring data, identifying patterns, and turning datasets into useful insights.",
      image: "/images/research.png",
      imageClassName: "p-8 md:p-13",
    },
    {
      title: "Machine Learning",
      description: "Building and experimenting with machine learning models to solve practical problems.",
      image: "/images/AI_ML.png",
    },
    {
      title: "Data Analysis",
      description: "Working with data cleaning, exploratory analysis, visualization, and model evaluation.",
      image: "/images/data_analysis.png",
      imageClassName: "p-4 md:p-5",
    },
    {
      title: "Artificial Intelligence",
      description: "Exploring AI concepts and building practical AI-powered solutions.",
      image: "/images/prompt_engineering.png",
    },
    {
      title: "Data Visualization",
      description: "Creating clear visualizations and dashboards to communicate data effectively.",
      image: "/images/ui-ux-design.svg",
    },
  ]

  const extraSkills = [
    {
      title: "Creative Problem Solving",
      description: "Enjoying challenging problems and finding practical and creative ways to approach them.",
      image: "/images/open_source.png",
    },
    {
      title: "Web Development",
      description: "Building practical interfaces and applications using modern web technologies.",
      image: "/images/web-design.svg",
    },
    {
      title: "Video Editing",
      description: "Experience with video editing and visual storytelling as a creative skill.",
      image: "/images/motion-graphics.svg",
    },
  ]

  const displayedServices = showMore ? [...services, ...extraSkills] : services

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[52px] md:leading-[60px] font-bold mb-3 md:mb-4">
              My broad <span className="bg-[#FF4A60] text-white px-2.5 py-0.5 md:px-3 md:py-1 inline-block">set of skills</span>
            </h2>
            <p className="text-[#393939] text-sm sm:text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              My skill set spans data science, machine learning, and artificial intelligence, enabling me to build functional, impactful projects from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[24px] sm:rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-0 md:min-h-[480px] flex flex-col group"
              >
                <div className="mb-4 md:mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[21px] sm:rounded-t-[29px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={328}
                    className={`w-full h-auto rounded-t-[21px] sm:rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out ${
                      // @ts-ignore
                      service.imageClassName || ""
                      }`}
                  />
                </div>
                <div className="px-6 pb-6 md:px-8 md:pb-8 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl md:text-[28px] md:leading-[40px] font-bold mb-2 md:mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-sm sm:text-base md:text-[18px] md:leading-[30px] font-medium text-[#393939]">{service.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-0 md:min-h-[480px] py-8 sm:py-10 md:py-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-6 md:mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-[92px] md:h-[92px]"
                />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-[28px] md:leading-[40px] font-bold mb-3 md:mb-4 text-[#0B0B0B]">
                {showMore ? "View less skills" : "View more skills"}
              </h3>
              <p className="text-sm sm:text-base md:text-[18px] md:leading-[30px] font-medium text-[#393939] mb-6 md:mb-8">
                {showMore
                  ? "Click to collapse the list and see fewer skills."
                  : "Click to expand the list and see more of my capabilities!"}
              </p>
              <Button
                onClick={() => setShowMore(!showMore)}
                className="bg-black text-white hover:bg-black/90 rounded-[14px] sm:rounded-[16px] px-6 sm:px-12 py-3 sm:py-6 font-medium text-base md:text-[18px] w-full max-w-[340px] h-12 sm:h-14 md:h-[64px]"
              >
                {showMore ? <ChevronUp className="w-5 h-5 mr-2" /> : <ChevronDown className="w-5 h-5 mr-2" />}
                {showMore ? "View less" : "View more"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
