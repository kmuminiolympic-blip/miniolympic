import { Clock } from "lucide-react"

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Schedule
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-4">
            행사 일정
          </h2>
          <p className="text-muted-foreground text-lg">
            2026년 5월 00일 (수) | 계명대학교 체육대학 주경기장
          </p>
        </div>

        {/* Single Schedule Box */}
        <div className="max-w-xl mx-auto">
          <div className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div className="text-primary font-bold text-2xl mb-1">
                  09:00 ~ 18:00
                </div>
                <h3 className="text-foreground font-bold text-xl mb-1">
                  상시 운영
                </h3>
                <p className="text-muted-foreground">
                  미니올림픽 전 종목 진행
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
