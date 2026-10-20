"use client"

import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function PortfolioSection() {
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  const projects = [
    {
      title: "Law Firm CRM Management System",
      description: "A planned CRM system for law firms to organize client information and case-related workflows. The concept focuses on secure authentication, structured data management, backend APIs, and a practical interface for managing application data. Planned Stack: Python • Flask • MongoDB • REST APIs",
      tag: "Concept",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#6366F1]",
      illustration: "/images/web-design.svg",
      imageClassName: "p-6 sm:p-8 md:p-12 object-contain",
    },
    {
      title: "BetonX – AI-Powered Concrete Monitoring Platform",
      description: "An early-stage concept for an AI-powered concrete monitoring platform that would explore predicting concrete strength from sensor data. The planned work includes data preprocessing, regression modelling, and a monitoring dashboard. Planned Stack: Python • Pandas • Scikit-learn • Random Forest • Flask • Next.js",
      tag: "Concept",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/AI_ML.png",
      imageClassName: "p-6 sm:p-8 md:p-12 object-contain",
    },
  ]

  const extraProjects = [
    {
      title: "Customer Churn Prediction Platform",
      description: "A planned machine learning platform for analyzing customer data, identifying churn patterns, and predicting customers who may be at risk of leaving. Planned Stack: Python • Pandas • Scikit-learn • Power BI • Next.js",
      tag: "Planned",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#FF6B6B]",
      illustration: "/images/data_analysis.png",
      imageClassName: "p-6 sm:p-8 md:p-12 object-contain",
    },
    {
      title: "Sales Demand Forecasting & Analytics",
      description: "A planned analytics and forecasting platform for studying historical sales patterns, forecasting future demand, and presenting useful business insights through interactive visualizations. Planned Stack: Python • Pandas • Scikit-learn • Time Series • Power BI • Next.js",
      tag: "Planned",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#4CAF50]",
      illustration: "/images/research.png",
      imageClassName: "p-6 sm:p-8 md:p-12 object-contain",
    },
    {
      title: "AI Music Mood & Genre Analyzer",
      description: "A planned AI project exploring how audio features can be analyzed to identify music mood and genre. The project combines machine learning with an interest in music and audio analysis. Planned Stack: Python • Librosa • Machine Learning • PyTorch • Flask • Next.js",
      tag: "Planned",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/motion-graphics.svg",
      imageClassName: "p-6 sm:p-8 md:p-12 object-contain",
    },
    {
      title: "AI Visual Intelligence",
      description: "A planned computer vision project exploring visual understanding and image-based search. The goal is to investigate how AI can extract useful information from images and help users find visually relevant content. Planned Stack: Python • OpenCV • PyTorch • Computer Vision • FastAPI/Flask • Next.js",
      tag: "Planned",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#FFC224]",
      illustration: "/images/prompt_engineering.png",
      imageClassName: "p-6 sm:p-8 md:p-12 object-contain",
    },
    {
      title: "Coming Soon",
      description: "Something new is in the works.",
      tag: "Coming Soon",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#9C27B0]",
      illustration: "/placeholder.svg",
      imageClassName: "p-6 sm:p-8 md:p-12 object-contain",
    },
    {
      title: "Coming Soon",
      description: "More projects will be added here.",
      tag: "Coming Soon",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#6366F1]",
      illustration: "/placeholder.svg",
      imageClassName: "p-6 sm:p-8 md:p-12 object-contain",
    },
    {
      title: "Coming Soon",
      description: "Another idea is taking shape.",
      tag: "Coming Soon",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#2F81F7]",
      illustration: "/placeholder.svg",
      imageClassName: "p-6 sm:p-8 md:p-12 object-contain",
    }
  ]

  const displayedProjects = showMoreProjects ? [...projects, ...extraProjects] : projects

  return (
    <section id="projects" className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-2.5 py-0.5 md:px-3 md:py-1 inline-block">Projects</span>
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 md:grid-cols-2 bg-white border-[3px] border-black rounded-[24px] sm:rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-5 sm:p-8 md:p-12 flex flex-col justify-center bg-white order-2 md:order-1">
                <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-lg sm:text-xl md:text-[28px] font-bold mb-3 md:mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base md:text-[18px] text-[#393939] mb-6 md:mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <div className="flex flex-row gap-3 sm:gap-4 items-center flex-wrap">
                  {
                    // @ts-ignore
                    project.githubUrl && (
                    <a
                      href={
                        // @ts-ignore
                        project.githubUrl || "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                    >
                      View GitHub
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                  {
                    // @ts-ignore
                    project.demoUrl && (
                      <a
                        href={
                          // @ts-ignore
                          project.demoUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                      >
                        View Demo
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )
                  }
                  {
                    // @ts-ignore
                    project.tryItUrl && (
                      <a
                        href={
                          // @ts-ignore
                          project.tryItUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-black text-white px-3.5 py-2 md:px-4 md:py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-all text-xs md:text-sm"
                      >
                        Try it yourself
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )
                  }
                </div>
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-[180px] sm:min-h-[260px] md:min-h-[500px] order-1 md:order-2`}>
                <Image
                  src={project.illustration || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${
                    // @ts-ignore
                    project.imageClassName || ""
                    }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowMoreProjects(!showMoreProjects)}
            className="bg-black text-white px-6 md:px-8 py-3.5 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base"
          >
            {showMoreProjects ? (
              <>
                <ChevronUp className="w-5 h-5" />
                View less projects
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                View more projects
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
