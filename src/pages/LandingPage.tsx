import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/features/HeroSection";
import DaVinciSection from "@/components/features/DaVinciSection";
import LivingArchSection from "@/components/features/LivingArchSection";
import VisualizationSection from "@/components/features/VisualizationSection";
import AvatarSection from "@/components/features/AvatarSection";
import NewsMonitor from "@/components/features/NewsMonitor";
import ChatBot from "@/components/features/ChatBot";
import ConclusionsSection from "@/components/features/ConclusionsSection";
import Footer from "@/components/layout/Footer";
import MusicPlayer from "@/components/features/MusicPlayer";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-forest-900 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <DaVinciSection />
        <LivingArchSection />
        <VisualizationSection />
        <AvatarSection />
        <NewsMonitor />
        <ChatBot />
        <ConclusionsSection />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}
