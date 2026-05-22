"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import { supabase } from "@/lib/supabase" // 💡 프로젝트 경로에 맞는지 확인하세요!

export function Footer() {
  // 초기 렌더링 동기화를 위해 null로 시작하거나 기본값을 적어줍니다.
  const [totalViews, setTotalViews] = useState<number | null>(null)

  useEffect(() => {
    const handleViews = async () => {
      // 윈도우 객체가 없으면 실행하지 않음 (서버 사이드 렌더링 에러 방지)
      if (typeof window === "undefined") return

      try {
        // 브라우저 세션을 확인하여 새로고침 시 무한으로 조회수가 올라가는 것을 방지합니다.
        const hasViewed = sessionStorage.getItem("hasViewedMain")

        if (hasViewed) {
          // 이미 현재 세션에서 방문한 적이 있다면 조회수 수치만 새로 가져옵니다.
          const { data, error } = await supabase
            .from("site_stats")
            .select("total_views")
            .eq("id", "main")
            .single()

          if (error) throw error
          if (data) setTotalViews(data.total_views)
          return
        }

        // --- 처음 방문한 세션일 경우: 조회수 +1 업데이트 진행 ---
        
        // 1. 현재 DB에 저장된 실제 조회수 가져오기
        const { data: currentData, error: fetchError } = await supabase
          .from("site_stats")
          .select("total_views")
          .eq("id", "main")
          .single()

        if (fetchError) throw fetchError

        if (currentData) {
          const nextViews = currentData.total_views + 1

          // 2. DB의 조회수를 1 증가시킵니다.
          const { error: updateError } = await supabase
            .from("site_stats")
            .update({ total_views: nextViews })
            .eq("id", "main")

          if (updateError) throw updateError

          // 3. 증가된 값을 화면에 반영하고 세션 스토리지에 기록합니다.
          setTotalViews(nextViews)
          sessionStorage.setItem("hasViewedMain", "true")
        }
      } catch (error) {
        console.error("조회수 동기화 중 오류 발생:", error)
        // 에러 발생 시 서비스가 멈추지 않도록 기본값이라도 노출시킵니다.
        setTotalViews(12540)
      }
    }

    handleViews()
  }, [])

  return (
    <footer className="bg-card border-t border-border py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 왼쪽 소개 */}
          <div className="lg:col-span-2">
            <span className="text-2xl font-black text-emerald-600 tracking-tighter block mb-4">
              KMU OLYMPIC
            </span>
            <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-sm">
              계명대학교 미니올림픽은 15년의 전통을 자랑하는 대표 체육 행사입니다.
              계명대학교의 열정과 도전을 함께합니다.
            </p>
          </div>

          {/* 오른쪽 연락처 */}
          <div className="lg:col-span-2 lg:flex lg:justify-end">
            <div className="lg:text-right">
              <h3 className="font-bold mb-4">연락처</h3>

              <div className="space-y-4">
                <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                  <li className="flex items-center gap-2 lg:justify-end">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>kmuminiolympic@gmail.com</span>
                  </li>

                  <li className="flex items-start gap-2 lg:justify-end">
                    <MapPin className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <span>대구광역시 달서구 계명대학교 구바우어관 풋살장 / 농구장</span>
                  </li>
                </ul>

                <Link
                  href="https://instagram.com/teamgreen_kmu"
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-muted-foreground font-medium hover:text-emerald-600 transition-colors lg:justify-end"
                >
                  <Instagram className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>팀 Green 인스타그램</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          {/* 왼쪽: 조회수 */}
          <div className="flex items-center gap-2 bg-emerald-100/50 px-4 py-1.5 rounded-full border border-emerald-100 order-2 md:order-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-emerald-500 block"></span>
            </span>
            <span className="text-[10px] font-black text-emerald-800 uppercase">
              Total Views
            </span>
            <span className="text-sm font-black text-emerald-600 min-w-[40px] text-center">
              {totalViews !== null ? totalViews.toLocaleString() : "---"}
            </span>
          </div>

          {/* 중앙: 약관 */}
          <div className="flex gap-6 text-sm text-muted-foreground font-bold order-3 md:order-2">
            <Link href="/privacy" className="hover:text-emerald-600 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-emerald-600 transition-colors">
              이용약관
            </Link>
          </div>

          {/* 오른쪽: 카피라이트 */}
          <p className="text-sm text-muted-foreground font-medium order-1 md:order-3 text-center md:text-right">
            © 2026 KMU 미니올림픽. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
