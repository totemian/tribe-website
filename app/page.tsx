import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FlavorCarousel } from "@/components/flavor-carousel"

import { ActivationsSection } from "@/components/activations-section"
import { CommunityRootsSection } from "@/components/community-roots-section"
import { NetworkLocationsSection } from "@/components/network-locations-section"
import { JoinNetworkSection } from "@/components/join-network-section"
import { AccessSection } from "@/components/access-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FlavorCarousel />
      <ActivationsSection />
      <CommunityRootsSection />
      <NetworkLocationsSection />
      <JoinNetworkSection />
      <AccessSection />
      <Footer />
    </main>
  )
}
