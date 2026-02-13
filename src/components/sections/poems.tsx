"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PoemsSection() {
  return (
    <section id="poems" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="mono-accent text-[#ff3250] mb-4">section 02</p>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight">
            Why I Love <span className="text-[#ff3250]">You</span>, Kathu
          </h2>
          <p className="text-neutral-600 mt-4 text-sm max-w-md mx-auto">
            Every reason, every moment, every heartbeat
          </p>
        </motion.div>

        {/* Featured photo + quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 items-center mb-16"
        >
          <div className="relative w-full md:w-1/2 aspect-[3/4] rounded-lg overflow-hidden border border-white/5">
            <Image
              src="/photos/us_section2.jpg"
              alt="Us together"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="flex-1 space-y-6">
            <motion.blockquote
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="border-l-2 border-[#ff3250]/30 pl-6"
            >
              <p className="text-lg md:text-xl font-extralight text-neutral-300 leading-relaxed italic">
                &ldquo;Three grand essentials to happiness in this life are
                something to do, something to love, and something to hope for.&rdquo;
              </p>
              <cite className="block mt-4 mono-accent text-[#ff3250]/60 not-italic">
                — Ikigai
              </cite>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-neutral-500 font-light text-sm leading-relaxed"
            >
              Finding my ikigai wasn&apos;t hard once I met you. You are the reason
              I wake up every day with something to love, and you are everything
              I hope for in the future.
            </motion.p>
          </div>
        </motion.div>

        {/* Emotional lines grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Shall I compare thee to a summer's day? Thou art more lovely and more temperate.",
              author: "Shakespeare",
              note: "You're better than any perfect day",
            },
            {
              quote:
                "How do I love thee? Let me count the ways. I love thee to the depth and breadth and height my soul can reach.",
              author: "Elizabeth Browning",
              note: "My love for you is limitless",
            },
            {
              quote:
                "Whatever our souls are made of, his and mine are the same.",
              author: "Emily Bronte",
              note: "We are one soul, Kathu",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group border border-white/5 rounded-lg p-6 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 hover:border-[#ff3250]/20"
            >
              <div className="mono-accent text-neutral-700 mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm font-light text-neutral-400 leading-relaxed italic mb-4">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mono-accent text-[#ff3250]/50 mb-3">
                — {item.author}
              </p>
              <p className="text-xs text-neutral-600 font-light">
                {item.note}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff3250]/0 to-transparent group-hover:via-[#ff3250]/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
