export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto p-10 space-y-6">
      <h1 className="text-2xl font-bold">이용약관</h1>

      <p>
        KMU 미니올림픽 그란페스타(이하 “행사”)의 이용약관입니다.
      </p>

      <div>
        <h2 className="font-bold text-lg mb-2">1. 목적</h2>
        <p>
          본 약관은 행사 참여 및 서비스 이용과 관련된 기본적인 사항을 규정합니다.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">2. 이용 대상</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>계명대학교 재학생 및 관계자</li>
          <li>행사 참여를 신청한 자</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">3. 참가 신청</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>신청자는 정확한 정보를 입력해야 합니다.</li>
          <li>허위 정보 입력 시 참가가 제한될 수 있습니다.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">4. 행사 운영</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>행사 일정 및 내용은 주최 측 사정에 따라 변경될 수 있습니다.</li>
          <li>참가자는 운영진의 안내를 따라야 합니다.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">5. 안전 및 책임</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>행사 중 발생하는 사고에 대해 참가자는 안전수칙을 준수해야 합니다.</li>
          <li>고의 또는 과실로 인한 피해는 본인 책임입니다.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">6. 금지 사항</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>타인에게 피해를 주는 행위</li>
          <li>행사 진행 방해</li>
          <li>부정 참가</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">7. 문의</h2>
        <p>이메일: kmuminiolympic@gmail.com</p>
      </div>

      <p className="text-sm text-muted-foreground">
        본 약관은 2026년 기준으로 적용됩니다.
      </p>
    </div>
  )
}