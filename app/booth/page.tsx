export default function BoothPage() {
  const links = [
    {
      title: "1번 부스",
      url: "https://www.instagram.com/teamgreen_kmu",
      image: "/images/팀 GREEN LOGO.png",
    },
    {
      title: "2번 부스",
      url: "https://www.instagram.com/teamgreen_kmu",
      image: "/images/팀 GREEN LOGO.png",
    },
    {
      title: "3번 부스",
      url: "https://www.instagram.com/teamgreen_kmu",
      image: "/images/팀 GREEN LOGO.png",
    },
	{
      title: "4번 부스",
      url: "https://www.instagram.com/teamgreen_kmu",
      image: "/images/팀 GREEN LOGO.png",
    },
	{
      title: "5번 부스",
      url: "https://www.instagram.com/teamgreen_kmu",
      image: "/images/팀 GREEN LOGO.png",
    },
	{
      title: "6번 부스",
      url: "https://www.instagram.com/teamgreen_kmu",
      image: "/images/팀 GREEN LOGO.png",
    },
	{
      title: "7번 부스",
      url: "https://www.instagram.com/teamgreen_kmu",
      image: "/images/팀 GREEN LOGO.png",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">부스 모아보기</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {/* 이미지 */}
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* 텍스트 */}
            <div className="p-4">
              <p className="font-semibold">{item.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}