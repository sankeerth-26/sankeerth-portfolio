"use client"

import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 pt-2 md:pt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-[1.3]">
            When I&apos;m Not
            <br />
            <span className="bg-[#2F81F7] text-white px-2.5 py-0.5 md:px-3 md:py-1 inline-block">Coding</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto pb-4 sm:pb-6 md:pb-8">
            When I&apos;m not working with data or technology, I enjoy spending time on the creative side of things.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-white border-4 border-black rounded-[20px] sm:rounded-3xl py-6 px-5 sm:py-8 sm:px-6 md:py-14 md:px-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -top-4 sm:-top-5 md:-top-8 left-5 sm:left-6 md:left-8 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16">
                <Image
                  src="/images/633b1c81e34cfb82b85454eb-quote-s.png"
                  alt="Quote"
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>

              <div className="max-w-3xl">
                <p className="text-sm sm:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
                  I&apos;m a musician who plays keyboard and guitar, sings, and performs Western dance. I also enjoy
                  filming and video editing, which gives me another way to explore creativity. I enjoy taking on
                  challenges, learning new things, and finding creative ways to approach problems.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 md:mb-8">
                  <div className="bg-gray-50 border-2 border-black rounded-lg sm:rounded-xl p-3.5 sm:p-4">
                    <div className="font-bold text-sm md:text-base text-[#0B0B0B] mb-1">Music</div>
                    <div className="text-gray-600 text-xs md:text-sm">Keyboard, guitar, and singing.</div>
                  </div>
                  <div className="bg-gray-50 border-2 border-black rounded-lg sm:rounded-xl p-3.5 sm:p-4">
                    <div className="font-bold text-sm md:text-base text-[#0B0B0B] mb-1">Western Dance</div>
                    <div className="text-gray-600 text-xs md:text-sm">Professional Western dancer with a passion for performance.</div>
                  </div>
                  <div className="bg-gray-50 border-2 border-black rounded-lg sm:rounded-xl p-3.5 sm:p-4">
                    <div className="font-bold text-sm md:text-base text-[#0B0B0B] mb-1">Creative Work</div>
                    <div className="text-gray-600 text-xs md:text-sm">Filming and video editing as another form of creative expression.</div>
                  </div>
                  <div className="bg-gray-50 border-2 border-black rounded-lg sm:rounded-xl p-3.5 sm:p-4">
                    <div className="font-bold text-sm md:text-base text-[#0B0B0B] mb-1">Problem Solving</div>
                    <div className="text-gray-600 text-xs md:text-sm">Bringing creativity and experimentation into the way I approach technical problems.</div>
                  </div>
                </div>

                <div>
                  <div className="font-bold text-sm sm:text-base md:text-lg">Sankeerth S</div>
                  <div className="text-gray-600 text-xs sm:text-sm md:text-base">Data Science &amp; AI/ML Enthusiast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
