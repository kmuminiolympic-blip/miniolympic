import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const sponsors = [
  {
    id: 1,
    name: "후원사 A",
    logo: "/images/sponsors/sponsor-a.png",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "PCR 053",
    logo: "/images/sponsors/피씨알.jpg",
    website: "https://www.instagram.com/pcr053",
  },
  {
    id: 3,
    name: "후원사 C",
    logo: "/images/sponsors/sponsor-c.png",
    website: "https://example.com",
  },
  {
    id: 4,
    name: "후원사 D",
    logo: "/images/sponsors/sponsor-d.png",
    website: "https://example.com",
  },
]

// 산뜻한 테마 컬러 정의
const pointColorText = "text-emerald-600";
const pointColorBg = "bg-emerald-600";

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <p className={`${pointColorText} font-semibold text-sm tracking-widest uppercase mb-4`}>
            Sponsors
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-4">
            공식 후원사
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            미니올림픽을 함께 만들어가는 소중한 파트너사들입니다
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {sponsors.map((sponsor) => (
            <Link
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border border-border rounded-[2rem] p-6 lg:p-8 hover:border-emerald-500/30 hover:bg-emerald-50/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[180px] lg:min-h-[220px] hover:shadow-xl hover:-translate-y-1"
            >
              {/* 실제 이미지 로고 적용 */}
              <div className="relative w-full h-36 lg:h-44 mb-4 transition-all duration-500 group-hover:scale-105 overflow-hidden rounded-2xl">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} 로고`}
                  fill
                  className="object-contain" // 로고 비율 유지
                />
              </div>

              {/* Sponsor Name */}
              <span className={`text-sm lg:text-base font-bold text-muted-foreground group-hover:${pointColorText} transition-colors`}>
                {sponsor.name}
              </span>

              {/* External Link Icon */}
              <ExternalLink className={`w-4 h-4 text-muted-foreground/0 group-hover:text-emerald-500 transition-all mt-2 group-hover:opacity-100`} />
            </Link>
          ))}
        </div>

        {/* CTA (Call To Action) */}
        <div className="mt-16 text-center bg-emerald-50/50 border border-emerald-100 rounded-[2.5rem] py-12 px-6">
          <p className="text-foreground font-bold text-lg mb-6">
            미니올림픽의 후원사가 되어주세요
          </p>
          <Link
            href="https://www.instagram.com/teamgreen_kmu"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${pointColorBg} text-white font-bold px-8 py-4 rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:scale-105`}
          >
            후원 문의하기
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
