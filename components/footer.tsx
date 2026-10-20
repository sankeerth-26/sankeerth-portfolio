"use client"

import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"

export function Footer() {
  const [subject, setSubject] = useState("")

  const handleSend = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=sankeerth1920@gmail.com&su=${encodeURIComponent(subject)}`, '_blank')
  }

  return (
    <footer id="socials" className="bg-black text-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/newsletter-icon.png"
                  alt="Newsletter"
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>

              <div className="w-full flex-1 bg-white border-4 border-black rounded-[20px] sm:rounded-3xl py-4 px-3 sm:px-4 md:py-6 md:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Let&apos;s build something interesting.</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-1">
                    Have an idea, opportunity, or interesting problem to discuss? I&apos;d love to hear from you.
                  </p>
                </div>

                <div className="relative w-full md:w-auto md:min-w-[400px] lg:min-w-[480px]">
                  <Input
                    type="text"
                    placeholder="Type your subject..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-3 sm:border-4 border-black rounded-xl px-3 sm:px-4 md:px-6 h-12 sm:h-14 md:h-16 pr-24 sm:pr-32 md:pr-44 text-sm sm:text-base md:text-lg placeholder:text-gray-500 text-black"
                  />
                  <Button
                    onClick={handleSend}
                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-black text-white hover:bg-black/90 rounded-[10px] px-4 sm:px-6 md:px-10 text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap h-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-lg sm:text-xl font-bold">Sankeerth S</h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">Data Science &amp; AI/ML Enthusiast</p>
              <p className="text-xs text-gray-400 mt-1.5 max-w-sm">Turning challenges into creative solutions.</p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-6 text-center md:text-left">Follow Me</h3>
              <div className="flex gap-3 justify-center md:justify-start">
                <a
                  href="https://github.com/sankeerth-26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sankeerth-s-1bbba1294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/sankeerth._s/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2 md:mb-4 text-center md:text-right text-base md:text-lg">Contact Me</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs sm:text-sm">
                <li className="flex items-center gap-2 justify-center md:justify-end">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:sankeerth1920@gmail.com" className="hover:text-white transition-colors">
                    sankeerth1920@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
