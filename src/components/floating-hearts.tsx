"use client";

import { useEffect, useState } from "react";

function Heart({ delay, left, size }: { delay: number; left: number; size: number }) {
  return (
    <div
      className="particle"
      style={{
        left: `${left}%`,
        bottom: "-20px",
        animation: `float ${8 + Math.random() * 6}s linear ${delay}s infinite`,
        fontSize: `${size}px`,
        opacity: 0,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(255,50,80,0.3)"
        strokeWidth="1"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </div>
  );
}

export default function FloatingHearts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    left: Math.random() * 100,
    size: 8 + Math.random() * 14,
  }));

  return (
    <>
      {hearts.map((h) => (
        <Heart key={h.id} delay={h.delay} left={h.left} size={h.size} />
      ))}
    </>
  );
}
