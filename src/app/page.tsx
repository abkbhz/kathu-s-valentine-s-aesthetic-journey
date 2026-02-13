"use client";

import { useRef } from "react";

import HeroSection from "@/components/sections/hero";
import TimelineSection from "@/components/sections/timeline";
import PoemsSection from "@/components/sections/poems";
import PuzzleSection from "@/components/sections/puzzle";
import LoveLetterSection from "@/components/sections/love-letter";
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
      <TimelineSection />
      <div className="section-divider" />
      <PoemsSection />
      <div className="section-divider" />
      <PuzzleSection />
      <div className="section-divider" />
      <LoveLetterSection />
      <FooterSection />
    </div>
  );
}
