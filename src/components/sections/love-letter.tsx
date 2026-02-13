"use client";

import { motion } from "framer-motion";

export default function LoveLetterSection() {
  return (
    <section id="letter" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,50,80,0.06)_0%,transparent_70%)]" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="mono-accent text-[#ff3250] mb-4">section 04</p>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight">
            A Letter For <span className="text-[#ff3250]">You</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="border border-white/5 rounded-lg p-8 md:p-12 bg-white/[0.01] relative"
        >
          <div className="absolute top-6 right-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff3250"
              strokeWidth="1"
              className="opacity-30"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>

          <p className="mono-accent text-[#ff3250]/50 mb-8">
            Hey kathssss my love,
          </p>

          <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-sm md:text-base">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I just want you to know how much you mean to me.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We&apos;ve had our fights, but it only made me realize how much I love you.
              Your smile makes everything better, and I&apos;m so happy to have you in my life.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              No matter what, I promise to love you always.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 text-right text-neutral-500 font-light italic"
          >
            Forever yours,
            <br />
            <span className="text-[#ff3250]/70 cursor-blink">
              ur idiot, bufoon, weird, creep, abk, Mr
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
