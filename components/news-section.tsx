"use client"

import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "미니올림픽 참가부스",
    image: "/images/로고.png",
    tag: "참가부스",
  },
  {
    id: 2,
    title: "미니올림픽 기사",
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

            {/* 1. 참가부스 → 내부 페이지 이동 (기사 카드와 디자인 통일) */}
            if (item.tag === "참가부스") {
              return (
                <Link
                  key={item.id}
                  href="/booth"
                  className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* 기사와 동일하게 aspect-video 적용 */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                      {/* ✨ 수정된 부분: 참가부스 이미지에만 style={{ transform: "scale(0.8)" }} 부여 */}
                      style={{ transform: "scale(0.8)" }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* 기사와 동일하게 flex items-start justify-between 및 아이콘 추가 */}
                  <div className="p-6 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {/* item.description이 있다면 여기에 출력됩니다 */}
                      </p>
                    </div>
                    {/* 내부 링크용 화살표 아이콘 */}
                    <ArrowRight className="w-5 h-5 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              )
            }

            {/* 2. 기사 → 외부 링크 */}
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
                      {/* item.description */}
                    </p>
                  </div>
                  {/* 외부 링크용 아이콘 */}
                  <ExternalLink className="w-5 h-5 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
