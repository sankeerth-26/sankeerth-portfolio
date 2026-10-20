import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-12 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-boy.png" alt="About me illustration" fill className="object-cover object-center" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Who's behind <span className="bg-[#2F81F7] text-white px-2.5 py-0.5 md:px-3 md:py-1 inline-block">all this?</span>
            </h2>
            <div className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed space-y-3 md:space-y-4">
              <p>
                I'm a student passionate about Data Science, Artificial Intelligence, and Machine Learning. I enjoy taking on challenging problems, breaking them down, and looking for solutions that are not only effective but also creative.
              </p>
              <p>
                I like learning by building and experimenting with different technologies while continuously improving my understanding of data and machine learning. I also enjoy working in teams, especially with people who are skilled and motivated, where contributing to the team and helping everyone move forward comes first.
              </p>
              <p>
                Outside technology, I'm a musician who plays keyboard and guitar, sings, and performs Western dance. Creativity plays a big role in both my technical and personal interests.
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">Problem Solver</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  Enjoy taking on challenging problems and finding practical solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2">Team First</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  Believe that helping the team succeed comes before individual credit.
                </p>
              </div>
            </div>
          </div>

          <a href="https://github.com/sankeerth-26" target="_blank" rel="noopener noreferrer" className="block sm:inline-block">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-4 px-6 md:py-[26px] md:px-[72px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <Github className="w-5 h-5 mr-2" />
              My Github
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
