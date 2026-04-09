"use client"

import { Trophy, Users, Flag, Star, Medal, Target, Flame } from "lucide-react"

const eventItems = [
  {
    title: "팀GREEN",
    description: " 콘홀, 셔플보드 ",
    number: "01",
    link: "https://example.com/green",
  },
  {
    title: "Tricker",
    description: "?",
    number: "02",
    link: "https://example.com/green",
  },
  {
    title: "라더즈",
    description: "?",
    number: "03",
    link: "https://example.com/green",
  },
  {
    title: "언볼란스",
    description: "?",
    number: "04",
    link: "https://example.com/green",
  },
  {
    title: "3군단",
    description: "?",
    number: "05",
    link: "https://example.com/green",
  },
  {
    title: "고투월드컵",
    description: "?",
    number: "06",
    link: "https://example.com/green",
  },
  {
    title: "Kick & Kick",
    description: "?",
    number: "07",
    link: "https://example.com/green",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
            EVENT INFO
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            행사 소개
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            2026 KMU 미니올림픽에서 진행되는 다양한 종목과 행사를 소개합니다
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {eventItems.map((item, index) => (
            <a
            key={index}key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            >
            
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {item.number}
                    </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
