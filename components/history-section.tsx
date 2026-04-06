import { Trophy } from "lucide-react"

const historyItems = [
  { year: "2010", event: "제1회 계명대학교 미니올림픽 개최" },
  { year: "2026", event: "제16회 미니올림픽 그란페스타" },
]

export function HistorySection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            History
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-foreground">
            미니올림픽 연혁
          </h2>
        </div>

        {/* History Box */}
        <div className="bg-background border border-border rounded-2xl p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                16년의 전통과 역사
              </h3>
              <p className="text-muted-foreground text-sm">
                계명대학교 미니올림픽은 계명대 체육 행사의 역사입니다
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-6">
              {historyItems.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <span className="text-foreground font-medium">{item.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
