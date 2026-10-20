"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const handleSend = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=sankeerth1920@gmail.com`, '_blank')
  }

  return (
    <div className="container mx-auto px-4 pt-6 md:pt-8 pb-3 md:pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 max-w-2xl mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-9 h-9 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="#home" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Home
          </a>
          <a href="#about" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#projects" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Projects
          </a>
          <a href="#experience" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Experience
          </a>
          <a href="#socials" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Socials
          </a>
        </div>

        <Button
          onClick={handleSend}
          className="bg-black text-white hover:bg-black/90 rounded-sm px-3.5 md:px-5 h-10 md:h-12 min-w-[44px] md:min-w-[48px] flex-shrink-0"
          aria-label="Send Email"
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </Button>
      </nav>
    </div>
  )
}
