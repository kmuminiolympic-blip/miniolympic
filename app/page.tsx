import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { NewsSection } from "@/components/news-section"
import { HistorySection } from "@/components/history-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { ScheduleSection } from "@/components/schedule-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <NewsSection />
      <ScheduleSection />
      <HistorySection />
      <SponsorsSection />
      <Footer />
    </main>
  )
}
