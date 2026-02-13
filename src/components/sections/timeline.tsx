"use client";

import { motion } from "framer-motion";

const moments = [
  {
    label: "The Beginning",
    description: "The weird mess convo",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Post Dance Proposal",
    description: "The moment everything shifted",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18l6-6-6-6" />
      </svg>
    ),
  },
  {
    label: "The First Convo",
    description: "stalking about family and ruby",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Ethakkappam",
    description: "Love and fights in Chaya Kada",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    label: "And Now",
    description: "love you from a corner",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-32 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="mono-accent text-[#ff3250] mb-4">section 01</p>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight">
            Our <span className="text-[#ff3250]">Love</span>
          </h2>
          <p className="text-neutral-600 mt-4 text-sm max-w-md mx-auto">
            The chapters of us, still being written
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-12">
            {moments.map((moment, i) => (
              <motion.div
                key={moment.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="relative flex-shrink-0 w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center text-neutral-600 group-hover:text-[#ff3250] group-hover:border-[#ff3250]/30 transition-all duration-500">
                  {moment.icon}
                </div>

                <div className="pb-2">
                  <h3 className="text-white font-light text-base group-hover:text-[#ff3250] transition-colors duration-300">
                    {moment.label}
                  </h3>
                  <p className="text-neutral-500 text-sm font-light mt-1 leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
