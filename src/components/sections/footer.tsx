"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,50,80,0.04)_0%,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center relative z-10"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="#ff3250"
          className="mx-auto mb-6 heartbeat"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>

        <p className="text-neutral-500 font-light text-sm leading-relaxed">
          Made with love for{" "}
          <span className="text-[#ff3250]">Kathu</span>
        </p>

        <p className="mono-accent mt-4 text-neutral-700">
          Happy Valentine&apos;s Day 2026
        </p>

        <div className="mt-8 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-[#ff3250]/20 to-transparent" />

        <p className="mt-8 text-xs text-neutral-600 tracking-wider">
          miss you kathuuu
          <br />
          <span className="text-[#ff3250]/80 mt-2 block">— ABHINAV KRISHNA VAYANAKARA PUTHANVEEDU</span>
        </p>
      </motion.div>
    </footer>
  );
}
