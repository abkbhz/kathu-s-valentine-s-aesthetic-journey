"use client";

import { motion } from "framer-motion";

const photos = [
  { id: 1, label: "Our first moment", span: "md:col-span-2 md:row-span-2" },
  { id: 2, label: "Together", span: "" },
  { id: 3, label: "That smile", span: "" },
  { id: 4, label: "Adventures", span: "md:col-span-2" },
  { id: 5, label: "Us", span: "" },
  { id: 6, label: "Always", span: "" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="mono-accent text-[#ff3250] mb-4">section 02</p>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight">
            Our <span className="text-[#ff3250]">Moments</span>
          </h2>
          <p className="text-neutral-600 mt-4 text-sm max-w-md mx-auto">
            Every picture tells a story of us. Add your photos here, Kathu.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`photo-frame relative group ${photo.span}`}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg border border-white/5 bg-white/[0.02]">
                {/* Placeholder for actual photos */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#333"
                    strokeWidth="1"
                    className="mb-3 group-hover:stroke-[#ff3250] transition-colors duration-300"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="text-neutral-600 text-xs font-light">
                    {photo.label}
                  </p>
                  <p className="mono-accent mt-1 text-neutral-700">
                    add photo
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#ff3250]/0 group-hover:bg-[#ff3250]/5 transition-colors duration-500 rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-neutral-600 text-xs"
        >
          Replace these placeholders with our actual photos
        </motion.p>
      </div>
    </section>
  );
}
