import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHeroSection } from "@/components/about-hero-section"
import { AboutMissionSection } from "@/components/about-mission-section"
import { AboutValuesSection } from "@/components/about-values-section"
import { AboutTeamSection } from "@/components/about-team-section"
import { AboutTimelineSection } from "@/components/about-timeline-section"

export const metadata = {
  title: "About | Tribe26",
  description:
    "Learn about Tribe26 — Vancouver's local ecosystem built on community, trust, and shared growth. Rooted in Persian values, open to all.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutValuesSection />
      <AboutTimelineSection />
      <AboutTeamSection />
      <Footer />
    </main>
  )
}
