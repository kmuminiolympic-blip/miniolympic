export default function BoothPage() {
  const links = [
    { title: "팀 Green", url: "https://www.instagram.com/teamgreen_kmu" },
    { title: "언볼란스", url: "https://www.instagram.com/kmu_unballance/" },
    { title: "Kick & Kick", url: "https://www.instagram.com/openwithkk/" },
    { title: "라더즈", url: "https://www.instagram.com/kmu_ladders/" },
    { title: "GO TO WORLDCUP", url: "https://www.instagram.com/kmu_goto_wc/" },
    { title: "KMUGEAR", url: "https://www.instagram.com/kmugear_official/" },
    { title: "타겟", url: "https://www.instagram.com/target.kmu/" },
    { title: "칠래탈래", url: "https://www.instagram.com/kmu_chilletalle/" },
    { title: "All-Kill", url: "https://www.instagram.com/kmu_allkill/" },
    { title: "풋라키오사우르스", url: "https://www.instagram.com/kmu_footrachiosaurus/" },
    { title: "HOLE IN LOVE", url: "https://www.instagram.com/kmu_hole_in_love/" },
    { title: "Tricker", url: "no link" },
    { title: "3군단", url: "no link" },
    { title: "때리지 마세요", url: "no link" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">부스 모아보기</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {links.map((item, index) => {
          // 링크가 없는지 확인하는 조건문입니다.
          const hasNoLink = item.url === "no link";

          // 1. 링크가 없는 경우: 클릭할 수 없는 평범한 상자(div)를 보여줍니다.
          if (hasNoLink) {
            return (
              <div
                key={index}
                className="flex items-center justify-between p-5 border rounded-xl bg-gray-50 opacity-60 selectors-none cursor-not-allowed"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-lg text-gray-500">
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-400 mt-1">링크 준비 중 ⏳</span>
                </div>
              </div>
            );
          }

          // 2. 링크가 있는 경우: 기존처럼 클릭 가능한 링크(a 태그)를 보여줍니다.
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 border rounded-xl bg-white hover:bg-gray-50 hover:border-gray-400 hover:shadow-md transition dynamic-shadow"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-gray-800 group-hover:text-black">
                  {item.title}
                </span>
                <span className="text-xs text-gray-400 mt-1">Instagram 방문하기 →</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
