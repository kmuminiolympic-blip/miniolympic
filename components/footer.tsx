import Link from "next/link"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-primary">KMU OLYMPIC</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              계명대학교 미니올림픽은 16년의 전통을 자랑하는 계명대 대표 체육 행사입니다.
              세계를 향해 빛을 여는 대학, 계명대학교의 열정과 도전을 함께합니다.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-bold mb-4">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>000-000-0000</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>kmuminiolympic@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>대구광역시 달서구 달구벌대로 1095<br />계명대학교 체육대학</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                 <Instagram className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <a
                  href="https://www.instagram.com/teamgreen_kmu"
                   target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    >
                      팀GREEN 인스타그램
                    </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-4">후원사 바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  A
                </Link>
              </li>
              <li>
                <Link href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  B
                </Link>
              </li>
              <li>
                <Link href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  C
                </Link>
              </li>
              <li>
                <Link href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  D
                </Link>
              </li>
              <li>
                <Link href="https://www.kmu.ac.kr" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  계명대학교 홈페이지
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 KMU 미니올림픽 그란페스타. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              개인정보처리방침
            </Link>
            <Link href="terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
