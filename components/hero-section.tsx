import { User, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-[72px] font-bold leading-tight md:leading-[85px]">
            I'm <span className="bg-[#FF6B7A] text-white px-2.5 py-0.5 md:px-3 md:py-1 inline-block">Sankeerth S</span>, a Data Science & AI/ML enthusiast from{" "}
            <span className="bg-[#2F81F7] text-white px-2.5 py-0.5 md:px-3 md:py-1 inline-block">Bengaluru!</span>
          </h1>

          <p className="text-[#393939] text-base md:text-[18px] font-medium leading-relaxed md:leading-[30px] max-w-xl">
            I enjoy taking on challenging problems, finding creative solutions, and learning by building. I'm interested in Data Science, Artificial Intelligence, and Machine Learning, and I enjoy working with people who bring the same energy to a team.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-7 pt-2 sm:pt-4">
            <a href="#about" className="w-full sm:w-auto">
              <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-4 px-6 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
                <User className="w-5 h-5 mr-2 sm:mr-0" />
                About me
              </Button>
            </a>
            <a
              href="/resume.pdf"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-4 px-6 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              >
                <FileText className="w-5 h-5 mr-2 sm:mr-0" />
                View resume
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <div className="relative w-full max-w-xs sm:max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/hero-boy.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
