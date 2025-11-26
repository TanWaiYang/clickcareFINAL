import Navbar from "@/components/Navbar";
import FeatureCards from "@/components/voice/FeatureCards";
import ProPlanRequired from "@/components/voice/ProPlanRequired";
import VapiWidget from "@/components/voice/VapiWidget";
import WelcomeSection from "@/components/voice/WelcomeSection";
import { auth } from "@clerk/nextjs/server";

async function VoicePage() {
  const { has } = await auth();

  // This help me verify if user have the correct plan to use the voice AI if not return pro plan required
  const hasProPlan =
    has({ plan: "artificial_basic" }) || has({ plan: "artificial_advance" });

  if (!hasProPlan) return <ProPlanRequired />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <WelcomeSection />
        <FeatureCards />
      </div>

      <VapiWidget />
    </div>
  );
}

export default VoicePage;
