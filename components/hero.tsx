import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo */}
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 mb-4">
            <Image
              src="/images/mini-olympics-logo-배경제거.png"
              alt="KMU 미니올림픽 로고"
              fill
              className="object-contain rounded-2xl"
              priority
            />
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm lg:text-base tracking-widest uppercase">
              Keimyung University Mini Olympics
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground leading-tight text-balance">
              미니올림픽
              <br />
              <span className="text-primary">그란페스타</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium mt-6">
              세계를 향해 빛을 여는 대학
            </p>
          </div>

          {/* Event Info Cards */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 py-4">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">일정</p>
                <p className="text-sm lg:text-base font-semibold text-foreground">2026년 5월 00일 (수) 09:00~18:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 py-4">
              <MapPin className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">위치</p>
                <p className="text-sm lg:text-base font-semibold text-foreground">계명대학교 체육대학 주경기장</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
            href="https://docs.google.com/forms/d/11-vFcgZj8DkWU5FUpHP6kFeOP49WgxLXH3VHoCotydM/edit"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 py-6"
            >
              신청하기
            </Button>
            </a>
           <a href="#about">
           <Button
           size="lg"
           variant="outline"
           className="border-border text-foreground hover:bg-card font-semibold text-base px-8 py-6"
           >
              행사 자세히 보기
            </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  )
}
