import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Users } from "lucide-react"

export function Footer() {
  const totalViews = 12540;

  return (
    <footer className="bg-card border-t border-border py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <span className="text-2xl font-black text-emerald-600 tracking-tighter block mb-4">KMU OLYMPIC</span>
            <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-sm">
              계명대학교 미니올림픽은 15년의 전통을 자랑하는 대표 체육 행사입니다. 계명대학교의 열정과 도전을 함께합니다.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">연락처</h3>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-600" /> 000-000-0000</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-600" /> kmuminiolympic@gmail.com</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-emerald-600 mt-1" /> 대구광역시 달서구 계명대학교 체육대학</li>
            </ul>
            <Link href="https://instagram.com/teamgreen_kmu" target="_blank" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
              <Instagram className="w-4 h-4 text-emerald-600" /> 팀GREEN 인스타그램
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <Link href="https://instagram.com/teamgreen_kmu" target="_blank" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-600 transition-colors">
              <Instagram className="w-4 h-4 text-emerald-600" /> 팀GREEN 인스타그램
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          {/* 왼쪽: 조회수 */}
          <div className="flex items-center gap-2 bg-emerald-100/50 px-4 py-1.5 rounded-full border border-emerald-100 order-2 md:order-1">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative h-2 w-2 rounded-full bg-emerald-500 block"></span></span>
            <span className="text-[10px] font-black text-emerald-800 uppercase">Total Views</span>
            <span className="text-sm font-black text-emerald-600">{totalViews.toLocaleString()}</span>
          </div>

          {/* 중앙: 약관 */}
          <div className="flex gap-6 text-sm text-muted-foreground font-bold order-3 md:order-2">
            <Link href="/privacy" className="hover:text-emerald-600">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-emerald-600">이용약관</Link>
          </div>

          {/* 오른쪽: 카피라이트 */}
          <p className="text-sm text-muted-foreground font-medium order-1 md:order-3">© 2026 KMU 미니올림픽. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
