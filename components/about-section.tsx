"use client"

import { Trophy, Users, Flag, Star, Medal, Target, Flame } from "lucide-react"

const eventItems = [
  {
    title: "팀 Green",
    description: " 던지고 밀고 도달하세요 ",
    number: "01",
    link: "https://www.instagram.com/teamgreen_kmu/",
  },
  {
    title: "언볼란스",
    description: " 버티고, 던지고, 승리하라 ",
    number: "02",
    link: "https://www.instagram.com/kmu_unballance/",
  },
  {
    title: "Kick & Kick",
    description: " Open your [ ] with KK ",
    number: "03",
    link: "https://www.instagram.com/openwithkk/",
  },
  {
    title: "라더즈",
    description: " LADDER TOSS ",
    number: "04",
    link: "https://www.instagram.com/kmu_ladders/",
  },
  {
    title: "GO TO WORLDCUP",
    description: " 운빨 축구 다트게임 ",
    number: "05",
    link: "https://www.instagram.com/kmu_goto_wc/",
  },
  {
    title: "KMUGEAR",
    description: " 원하는 운동으로 저희를 이기시면 선물을 드립니다. ",
    number: "06",
    link: "https://www.instagram.com/kmugear_official/",
  },
  {
    title: "타겟",
    description: " 네 상대는 나다 ",
    number: "07",
    link: "https://www.instagram.com/target.kmu/",
  },
  {
    title: "칠래탈래",
    description: " 어썰트 바이크 15초 챌린지 ",
    number: "08",
    link: "https://www.instagram.com/kmu_chilletalle/",
  },
  {
    title: "All-Kill",
    description: " 아쿠아 슈팅 챔피언십 ",
    number: "09",
    link: "https://www.instagram.com/kmu_allkill/",
  },
  {
    title: "풋라키오사우르스",
    description: " 브라키오사우르스와 함께하는 축구 3종 ",
    number: "10",
    link: "https://www.instagram.com/kmu_footrachiosaurus/",
  },
  {
    title: "HOLE IN LOVE",
    description: "  ",
    number: "11",
    link: "https://www.instagram.com/kmu_hole_in_love/",
  },
    {
    title: "Tricker",
    description: " ",
    number: "12",
  },
  {
    title: "3군단",
    description: "  ",
    number: "13",
  },
  {
    title: "때리지 마세요",
    description: "  ",
    number: "14",
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
