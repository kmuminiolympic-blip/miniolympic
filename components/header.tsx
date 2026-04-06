"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image" // 로고 이미지를 위한 Image 컴포넌트 추가

const navItems = [
  { label: "행사소개", href: "#about" },
  { label: "후원사", href: "#sponsors" },
  { label: "뉴스", href: "#news" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 그리드 또는 Flex를 사용하여 3구역으로 분할 */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* 1. 왼쪽: 로고 구역 (메인 로고 이미지를 헤더 사이즈로 최적화) */}
<div className="flex-1 flex justify-start">
  <Link href="/" className="flex items-center gap-2 group">
    {/* 이미지 컨테이너: 헤더 높이에 맞춰 w-10~12 정도로 설정 */}
    <div className="relative w-20 h-20 lg:w-12 lg:h-12 transition-transform group-hover:scale-105"> 
      <Image
        src="/images/mini-olympics-logo-배경제거.png" // 경로를 메인 로고와 통일했습니다
        alt="KMU OLYMPIC Logo"
        fill
        className="object-contain" // 비율 유지하며 채움
        priority // 네비게이션 로고는 LCP 최적화 위해 필수
      />
    </div>
  </Link>
</div>

          {/* 2. 중앙: 서비스명 (절대적인 중앙 정렬을 위해 flex-1 및 text-center) */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center">
              <span className="text-lg lg:text-xl font-black text-primary tracking-tighter">
                KMU OLYMPIC
              </span>
            </Link>
          </div>

          {/* 3. 오른쪽: 신청하기 버튼 및 데스크탑 내비 (flex-1을 주어 공간 확보) */}
          <div className="flex-1 flex justify-end items-center gap-6">
            {/* 데스크탑 내비게이션 (로고와 버튼 사이 공간이 좁으면 삭제하거나 위치 조정 가능) */}
            <nav className="hidden xl:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href="https://docs.google.com/forms/d/11-vFcgZj8DkWU5FUpHP6kFeOP49WgxLXH3VHoCotydM/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
                  신청하기
                </Button>
              </a>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 토글"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 (동일) */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold mt-2">
              신청하기
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}