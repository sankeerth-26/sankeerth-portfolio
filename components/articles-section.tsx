import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import Image from "next/image"

export function ArticlesSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Certificates and Licences</h2>
          <Button
            variant="outline"
            className="border-[3px] border-black rounded-xl px-4 md:px-6 py-3 sm:py-4 md:py-6 hover:bg-gray-50 bg-white font-semibold text-sm md:text-base w-full sm:w-auto opacity-60 cursor-not-allowed"
            disabled
          >
            <Pencil className="w-4 h-4 mr-2" />
            Browse more certificates
          </Button>
        </div>

        {/* Row 1: IBM Data Science Professional Certificate + 2 smaller */}
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Large featured card */}
          <a
            href="https://coursera.org/verify/professional-cert/23GO16ELAll9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Verify IBM Data Science Professional Certificate on Coursera"
            className="group block bg-white border-[3px] border-black rounded-[20px] sm:rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <div className="bg-[#EDEDED] relative min-h-[180px] sm:min-h-[220px] md:min-h-[320px] m-2.5 sm:m-3 md:m-4 rounded-xl sm:rounded-2xl overflow-hidden">
              <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs md:text-sm font-semibold px-2.5 py-1 md:px-4 md:py-2 rounded-lg z-10">
                Professional Cert
              </span>
              <Image
                src="/images/ibm-data-science.png"
                alt="IBM Data Science Professional Certificate"
                fill
                className="object-contain p-4 rounded-xl sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-6">
                IBM Data Science Professional Certificate
              </h3>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#1F70C1] border-2 border-black rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">IBM</span>
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base md:text-lg text-[#0B0B0B]">IBM / Coursera</div>
                </div>
              </div>
            </div>
          </a>

          {/* Right side — two smaller cards */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Generative AI */}
            <a
              href="https://coursera.org/verify/WIFIX0I6V50Q"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verify Generative AI: Elevate Your Data Science Career on Coursera"
              className="group block bg-white border-[3px] border-black rounded-[20px] sm:rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#EDEDED] min-w-full sm:min-w-[180px] md:min-w-[280px] min-h-[160px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-2.5 py-1 rounded-lg z-10">
                    Gen AI
                  </span>
                  <Image
                    src="/images/generative-ai-elevate.png"
                    alt="Generative AI: Elevate Your Data Science Career"
                    fill
                    className="object-contain p-2 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-5 sm:p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                    Generative AI: Elevate Your Data Science Career
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1F70C1] border-2 border-black rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold text-[10px]">IBM</span>
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm md:text-base text-[#0B0B0B]">IBM / Coursera</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Applied Data Science Capstone */}
            <a
              href="https://coursera.org/verify/ZMELS15XTFLG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verify Applied Data Science Capstone on Coursera"
              className="group block bg-white border-[3px] border-black rounded-[20px] sm:rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#EDEDED] min-w-full sm:min-w-[180px] md:min-w-[280px] min-h-[160px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-2.5 py-1 rounded-lg z-10">
                    Capstone
                  </span>
                  <Image
                    src="/images/applied-data-science-capstone.png"
                    alt="Applied Data Science Capstone"
                    fill
                    className="object-contain p-2 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-5 sm:p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                    Applied Data Science Capstone
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1F70C1] border-2 border-black rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold text-[10px]">IBM</span>
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm md:text-base text-[#0B0B0B]">IBM / Coursera</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Row 2: Python for Data Science + 2 smaller */}
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-4 sm:gap-6 mb-8 md:mb-16">
          {/* Large featured card */}
          <a
            href="https://coursera.org/verify/XWKSHY1A7MGB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Verify Python for Data Science, AI & Development on Coursera"
            className="group block bg-white border-[3px] border-black rounded-[20px] sm:rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <div className="bg-[#EDEDED] relative min-h-[180px] sm:min-h-[220px] md:min-h-[320px] m-2.5 sm:m-3 md:m-4 rounded-xl sm:rounded-2xl overflow-hidden">
              <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs md:text-sm font-semibold px-2.5 py-1 md:px-4 md:py-2 rounded-lg z-10">
                Python
              </span>
              <Image
                src="/images/python-for-data-science.png"
                alt="Python for Data Science, AI and Development"
                fill
                className="object-contain p-4 rounded-xl sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-6">
                Python for Data Science, AI &amp; Development
              </h3>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#1F70C1] border-2 border-black rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">IBM</span>
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base md:text-lg text-[#0B0B0B]">IBM / Coursera</div>
                </div>
              </div>
            </div>
          </a>

          {/* Right side — two smaller cards */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Databases and SQL */}
            <a
              href="https://coursera.org/verify/G0YR7KZ3W4FU"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verify Databases and SQL for Data Science with Python on Coursera"
              className="group block bg-white border-[3px] border-black rounded-[20px] sm:rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#EDEDED] min-w-full sm:min-w-[180px] md:min-w-[280px] min-h-[160px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-2.5 py-1 rounded-lg z-10">
                    SQL
                  </span>
                  <Image
                    src="/images/databases-sql-python.png"
                    alt="Databases and SQL for Data Science with Python"
                    fill
                    className="object-contain p-2 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-5 sm:p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                    Databases and SQL for Data Science with Python
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1F70C1] border-2 border-black rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold text-[10px]">IBM</span>
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm md:text-base text-[#0B0B0B]">IBM / Coursera</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Data Visualization with Python */}
            <a
              href="https://coursera.org/verify/3OTVOQ7NHMVW"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verify Data Visualization with Python on Coursera"
              className="group block bg-white border-[3px] border-black rounded-[20px] sm:rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#EDEDED] min-w-full sm:min-w-[180px] md:min-w-[280px] min-h-[160px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-2.5 py-1 rounded-lg z-10">
                    Data Viz
                  </span>
                  <Image
                    src="/images/data-visualization-python.png"
                    alt="Data Visualization with Python"
                    fill
                    className="object-contain p-2 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-5 sm:p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                    Data Visualization with Python
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1F70C1] border-2 border-black rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold text-[10px]">IBM</span>
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm md:text-base text-[#0B0B0B]">IBM / Coursera</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <NewsletterSignup />
      </div>
    </section>
  )
}
