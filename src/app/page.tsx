"use client";
import LoadingScreen from "@/components/LoadingScreen";
import CursorEffect from "@/components/CursorEffect";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import SocialSection from "@/components/SocialSection";
import LaunchSection from "@/components/LaunchSection";
import AboutSection from "@/components/AboutSection";
import RoadmapSection from "@/components/RoadmapSection";
import MemeWallSection from "@/components/MemeWallSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorEffect />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <SocialSection />
        <LaunchSection />
        <AboutSection />
        <RoadmapSection />
        <MemeWallSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
