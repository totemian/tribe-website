import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ApplicationsHero } from "./components/ApplicationsHero";
import { ApplicationDownloadCard } from "./components/ApplicationsDownloadCard";
import { ApplicationsHelper } from "./components/ApplicationsHelper";
import { ApplicationsGuide } from "./components/ApplicationsGuide";
import { ApplicationBenefits } from "./components/ApplicationsBenefit";
import { ApplicationsJoin } from "./components/ApplicationsJoin";

export const metadata = {
  title: "Applications | Tribe26",
  description:
    "Access Tribe26 on any platform. Available now as a web app, PWA, Android APK, and on the iOS App Store.",
};

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ApplicationsHero />
      <ApplicationDownloadCard />
      <ApplicationsHelper />
      <ApplicationsGuide />
      <ApplicationBenefits />
      <ApplicationsJoin />
      <Footer />
    </main>
  );
}
