"use client";

import { useRef } from "react";
import HeroSection from "@/components/sections/hero";
import PoemsSection from "@/components/sections/poems";
import GallerySection from "@/components/sections/gallery";
import LoveLetterSection from "@/components/sections/love-letter";
import TimelineSection from "@/components/sections/timeline";
import FooterSection from "@/components/sections/footer";
import FloatingHearts from "@/components/floating-hearts";
import Navigation from "@/components/navigation";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0a0a0a]">
      <FloatingHearts />
      <Navigation />
      <HeroSection />
      <div className="section-divider" />
      <PoemsSection />
      <div className="section-divider" />
      <GallerySection />
      <div className="section-divider" />
      <TimelineSection />
      <div className="section-divider" />
      <LoveLetterSection />
      <FooterSection />
    </div>
  );
}
