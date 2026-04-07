import Link from "next/link"
import { Calendar, MapPin, Trophy, Users, Heart, Newspaper, Info } from "lucide-react"

// 산뜻한 에메랄드 민트 색상 정의 (Tailwind 클래스 사용)
const pointColorText = "text-emerald-600"; // 주 포인트 텍스트 및 아이콘용 (산뜻한 녹색)
const pointColorBg = "bg-emerald-100";     // 연한 배경색용 (매우 연한 민트)
const pointColorHover = "group-hover:text-emerald-700"; // 호버 시 약간 짙어지는 색

export function Hero() {
  const mainMenus = [
    { label: "행사소개", href: "#about", icon: Info },
    { label: "참가부스", href: "#booths", icon: Users },
    { label: "후원사", href: "#sponsors", icon: Heart },
    { label: "뉴스", href: "#news", icon: Newspaper },
  ]

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-16 lg:pt-20 bg-background">
      {/* 배경 장식: 은은하고 산뜻한 녹색 그라데이션 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
        
        {/* 1. 상단 레이아웃 (타이틀 중앙 & 정보 우측) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 items-start pt-12 lg:pt-20 gap-8">
          {/* 왼쪽 빈 공간 */}
          <div className="hidden lg:block" />

          {/* 중앙 상단: 메인 타이틀 */}
          <div className="text-center space-y-4">
            <p className={`font-bold text-sm lg:text-base tracking-[0.2em] uppercase animate-fade-in ${pointColorText}`}>
              Keimyung University Mini Olympics
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground tracking-tighter">
              미니올림픽
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground font-medium tracking-tight">
              세계를 향해 빛을 여는 대학
            </p>
          </div>

          {/* 우측 상단: 일정 및 위치 (아이콘 색상 변경) */}
          <div className="flex flex-col items-center lg:items-end gap-3 text-right">
            <div className="flex items-center gap-2 text-foreground/80">
              <Calendar className={`w-4 h-4 ${pointColorText}`} />
              <span className="text-sm lg:text-base font-bold">2026. 05. 00 (수) 09:00~18:00</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <MapPin className={`w-4 h-4 ${pointColorText}`} />
              <span className="text-sm lg:text-base font-bold text-muted-foreground">계명대학교 체육대학 주경기장</span>
            </div>
          </div>
        </div>

        {/* 2. 중앙 메인: 4대 핵심 메뉴 바로가기 버튼 (산뜻한 테마 적용) */}
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full max-w-5xl">
            {mainMenus.map((menu) => (
              <Link 
                key={menu.label} 
                href={menu.href}
                className={`group relative flex flex-col items-center justify-center p-8 lg:p-12 bg-card hover:bg-emerald-50 border border-border rounded-[2rem] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden hover:border-emerald-200`}
              >
                {/* 배경 아이콘 장식 (색상 변경 및 투명도 조정) */}
                <menu.icon className={`absolute -right-4 -bottom-4 w-24 h-24 text-emerald-500/5 group-hover:text-emerald-500/10 transition-colors`} />
                
                {/* 메인 아이콘 (산뜻한 민트 배경 및 아이콘색 적용) */}
                <div className={`p-4 rounded-2xl ${pointColorBg} mb-6 group-hover:scale-110 transition-transform`}>
                  <menu.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${pointColorText}`} />
                </div>
                
                {/* 텍스트 (호버 시 약간 짙은 민트로 변경) */}
                <span className={`text-xl lg:text-2xl font-black text-foreground ${pointColorHover} transition-colors`}>
                  {menu.label}
                </span>
                
                {/* 하단 바 (색상 변경) */}
                <div className={`mt-4 w-8 h-1 bg-emerald-200 group-hover:w-16 transition-all duration-500 rounded-full group-hover:bg-emerald-400`} />
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* 하단 장식 (색상 변경) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 ${pointColorText} opacity-30 rounded-full flex justify-center p-1`}>
          <div className={`w-1 h-2 ${pointColorText} opacity-50 rounded-full`} />
        </div>
      </div>
    </section>
  )
}