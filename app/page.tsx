// 여기에 이 한 줄을 추가하세요!
export const dynamic = 'force-dynamic';

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { NewsSection } from "@/components/news-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <NewsSection />
      <SponsorsSection />
      <Footer />
    </main>
  )
}
