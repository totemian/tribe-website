import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ApplicationsHero } from "@/components/applications-hero"
import { ApplicationsPlatforms } from "@/components/applications-platforms"

export const metadata = {
  title: "Applications | Tribe26",
  description:
    "Access Tribe26 on any platform. Available now as a web app and PWA — iOS and Android apps coming before FIFA World Cup 2026.",
}

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ApplicationsHero />
      <ApplicationsPlatforms />
      <Footer />
    </main>
  )
}
