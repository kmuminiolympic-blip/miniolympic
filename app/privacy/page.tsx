export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto p-10 space-y-6">
      <h1 className="text-2xl font-bold">개인정보처리방침</h1>

      <p>
        KMU 미니올림픽 (이하 “행사”)는 개인정보 보호를 중요하게 생각하며,
        관련 법령을 준수합니다.
      </p>

      <div>
        <h2 className="font-bold text-lg mb-2">1. 수집하는 개인정보 항목</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>이름</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">2. 개인정보 수집 및 이용 목적</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>행사 참가 신청 및 관리</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">3. 개인정보 보유 및 이용 기간</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>행사 종료 후 파기</li>
          <li>법령에 따라 보관이 필요한 경우 해당 기간 동안 보관</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">4. 개인정보 제3자 제공</h2>
        <p>
          행사는 원칙적으로 개인정보를 외부에 제공하지 않습니다.
          단, 법령에 의한 경우는 예외로 합니다.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">5. 문의</h2>
        <p>이메일: kmuminiolympic@gmail.com</p>
      </div>

      <p className="text-sm text-muted-foreground">
        본 방침은 2026년 기준으로 적용됩니다.
      </p>
    </div>
  )
}