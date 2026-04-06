import Link from "next/link"
import { ExternalLink } from "lucide-react"

const sponsors = [
  {
    id: 1,
    name: "후원사 A",
    logo: "A",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "후원사 B",
    logo: "B",
    website: "https://example.com",
  },
  {
    id: 3,
    name: "후원사 C",
    logo: "C",
    website: "https://example.com",
  },
  {
    id: 4,
    name: "후원사 D",
    logo: "D",
    website: "https://example.com",
  },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Sponsors
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-4">
            공식 후원사
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            미니올림픽 그란페스타를 함께 만들어가는 소중한 파트너사들입니다
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
              className="group relative bg-card border border-border rounded-xl p-6 lg:p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 flex flex-col items-center justify-center min-h-[180px] lg:min-h-[220px]"
            >

              {/* Logo Placeholder */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-muted/80 transition-colors">
                <span className="text-3xl lg:text-4xl font-black text-muted-foreground">
                  {sponsor.logo}
                </span>
              </div>

              {/* Sponsor Name */}
              <span className="text-sm lg:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {sponsor.name}
              </span>

              {/* External Link Icon */}
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-2 opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            미니올림픽의 후원사가 되어주세요
          </p>
          <Link
  href="https://www.instagram.com/teamgreen_kmu"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
>
  후원 문의하기
  <ExternalLink className="w-4 h-4" />
</Link>
        </div>
      </div>
    </section>
  )
}
