import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

// 11개 공식 후원사 데이터 구성 (사조 팝콘의 링크를 빈 문자열로 수정)
const sponsors = [
  { id: 1, name: "해방피플클럽", logo: "/images/sponsors/해방피플클럽.jpg", website: "https://www.instagram.com/haebang_people_club/" },
  { id: 2, name: "PCR 053", logo: "/images/sponsors/PCR053.png", website: "https://www.instagram.com/pcr053/" },
  { id: 3, name: "TMT 피자", logo: "/images/sponsors/TMT 피자.png", website: "https://naver.me/xE6RKOw6" },
  { id: 4, name: "사조 팝콘", logo: "/images/sponsors/사조팝콘.png", website: "" }, // 링크 제거 완료
  { id: 5, name: "정육회", logo: "/images/sponsors/정육회.jpg", website: "https://www.instagram.com/yukhoe_jung_kmu/" },
  { id: 6, name: "수기소금", logo: "/images/sponsors/수기소금.png", website: "https://www.instagram.com/sugisogeum.kmu/" },
  { id: 7, name: "EARTH, US", logo: "/images/sponsors/EARTH,US.jpg", website: "https://www.instagram.com/earthuskr/" },
  { id: 8, name: "눈을 담다", logo: "/images/sponsors/눈을 담다.png", website: "https://naver.me/GiaQpMeh" },
  { id: 9, name: "풍동", logo: "/images/sponsors/풍동.png", website: "https://www.instagram.com/poongdong_kmu/" },
  { id: 10, name: "닭동가리", logo: "/images/sponsors/닭동가리.png", website: "https://www.instagram.com/dakdonggari_kmu/" },
  { id: 11, name: "예스", logo: "/images/sponsors/yess.jpg", website: "https://www.instagram.com/yess_zerowaste/" },
]

// 중간에 끊겨서 뚝 끊어지는 현상을 방지하기 위해 배열을 복사하여 연결합니다.
const doubledSponsors = [...sponsors, ...sponsors]

const pointColorText = "text-emerald-600"
const pointColorBg = "bg-emerald-600"

export function SponsorsSection() {
  // 공통 카드 스타일 (기존 스타일 유지, 자식 요소의 hover 제어를 위해 group 추가)
  const cardClassName = "inline-flex flex-col items-center justify-center bg-card border border-border rounded-[2rem] p-6 lg:p-8 transition-all duration-300 min-h-[180px] lg:min-h-[220px] w-[220px] lg:w-[280px] select-none group"

  return (
    <section id="sponsors" className="py-20 lg:py-32 bg-background overflow-hidden">
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
      </div>

      {/* 무한 가로 롤링 슬라이더 영역 */}
      <div className="relative w-full flex overflow-hidden group/container py-4">
        {/* - animate-marquee: globals.css에 등록한 롤링 애니메이션 활성화
           - group-hover/container:[animation-play-state:paused]: 마우스 올리면 일시정지하여 클릭을 편하게 유도
        */}
        <div className="flex gap-4 lg:gap-6 animate-marquee whitespace-nowrap w-max group-hover/container:[animation-play-state:paused]">
          {doubledSponsors.map((sponsor, index) => {
            // website가 존재하고 비어있지 않은지 확인
            const hasLink = !!sponsor.website

            // 모든 카드에 공통으로 들어갈 내부 UI (로고, 이름, 아이콘)
            const CardContent = (
              <>
                {/* 이미지 로고 (contain 속성 적용 및 여백 처리로 이미지 잘림 완벽 방지) */}
                <div className="relative w-full h-[120px] lg:h-[140px] rounded-3xl overflow-hidden mb-4 transition-all duration-500 group-hover:scale-105 bg-white p-2 flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} 로고`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* 후원사 이름 */}
                <span className={`text-sm lg:text-base font-bold text-muted-foreground group-hover:${pointColorText} transition-colors whitespace-normal text-center`}>
                  {sponsor.name}
                </span>

                {/* 외부 링크 아이콘 (링크가 있을 때만 렌더링) */}
                {hasLink && (
                  <ExternalLink className="w-4 h-4 text-muted-foreground/0 group-hover:text-emerald-500 transition-all mt-2 group-hover:opacity-100" />
                )}
              </>
            )

            // 링크 여부에 따른 조건부 분기 렌더링
            if (hasLink) {
              return (
                <Link
                  key={`${sponsor.id}-${index}`}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClassName} hover:border-emerald-500/30 hover:bg-emerald-50/50 hover:shadow-xl hover:-translate-y-1`}
                >
                  {CardContent}
                </Link>
              )
            } else {
              return (
                <div
                  key={`${sponsor.id}-${index}`}
                  className={`${cardClassName} cursor-default`}
                  // 링크가 없는 카드는 마우스를 올려도 둥둥 뜨거나 배경색이 변하지 않고 멈춰있도록 설계했습니다.
                >
                  {CardContent}
                </div>
              )
            }
          })}
        </div>
      </div>

      {/* CTA (Call To Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
