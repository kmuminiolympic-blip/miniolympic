"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "미니올림픽 카드뉴스",
    description: "카드뉴스 한 번에 보기",
    image: "/images/팀 GREEN LOGO.png",
    tag: "카드뉴스",
  },
  {
    id: 2,
    title: "미니올림픽 기사 스크랩",
    description: "언론 기사 보러가기",
    image: "/images/미니올림픽 기사 사진.png",
    link: "https://kmu.ac.kr/uni/kmupr/page.jsp?mnu_uid=287&cmd=2&parm_bod_uid=254193",
    tag: "기사",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            News & Media
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground">
            미니올림픽 소식
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {newsItems.map((item) => {

            // 📰 카드뉴스 → 내부 페이지 이동
            if (item.tag === "카드뉴스") {
              return (
                <Link
                  key={item.id}
                  href="/cardnews"
                  className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Link>
              )
            }

            // 📄 기사 → 외부 링크
            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 mt-1" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}