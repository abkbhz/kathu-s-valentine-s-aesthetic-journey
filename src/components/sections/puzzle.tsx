"use client";

import { motion } from "framer-motion";
import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

const photos = [
    { id: 1, src: "/photos/puzzle1.jpg" },
    { id: 2, src: "/photos/puzzle2.jpg" },
    { id: 3, src: "/photos/puzzle3.jpg" },
    { id: 4, src: "/photos/puzzle4.jpg" },
    { id: 5, src: "/photos/puzzle5.jpg" },
    { id: 6, src: "/photos/puzzle6.jpg" },
    { id: 7, src: "/photos/puzzle7.jpg" },
    { id: 8, src: "/photos/puzzle8.jpg" },
    { id: 9, src: "/photos/puzzle9.jpg" },
    { id: 10, src: "/photos/puzzle10.jpg" },
    { id: 11, src: "/photos/puzzle11.jpg" },
    { id: 12, src: "/photos/puzzle12.jpg" },
    { id: 13, src: "/photos/puzzle13.jpg" },
    { id: 14, src: "/photos/puzzle14.jpg" },
    { id: 15, src: "/photos/puzzle15.jpg" },
    { id: 16, src: "/photos/puzzle16.jpg" },
    { id: 17, src: "/photos/puzzle17.jpg" },
    { id: 18, src: "/photos/puzzle18.jpg" },
    { id: 19, src: "/photos/puzzle19.jpg" },
    { id: 20, src: "/photos/puzzle20.jpg" },
];

// Heart shape grid: 1 = card cell, 0 = empty
const heartGrid = [
    [0, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
];

interface Card {
    index: number;
    pairId: number;
    src: string;
    row: number;
    col: number;
}

function buildCards(): Card[] {
    const cells: { row: number; col: number }[] = [];
    heartGrid.forEach((row, r) =>
        row.forEach((val, c) => {
            if (val === 1) cells.push({ row: r, col: c });
        })
    );

    const totalCells = cells.length;
    const pairsNeeded = Math.floor(totalCells / 2); // 16 pairs for the 32 slots

    // Pick 16 random photos from the pool of 20 (or however many we have)
    const shuffledPool = [...photos].sort(() => Math.random() - 0.5);
    const selectedPhotos = shuffledPool.slice(0, pairsNeeded);

    const cardData: { pairId: number; src: string }[] = [];
    for (let i = 0; i < pairsNeeded; i++) {
        const photo = selectedPhotos[i];
        // Each pair gets a unique pairId so they match specifically with their partner
        cardData.push({ pairId: i, src: photo.src });
        cardData.push({ pairId: i, src: photo.src });
    }

    // Shuffle the final 32 cards
    for (let i = cardData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardData[i], cardData[j]] = [cardData[j], cardData[i]];
    }

    return cells.slice(0, pairsNeeded * 2).map((cell, i) => ({
        index: i,
        pairId: cardData[i].pairId,
        src: cardData[i].src,
        row: cell.row,
        col: cell.col,
    }));
}

export default function PuzzleSection() {
    const [cards, setCards] = useState<Card[]>([]);
    const [flipped, setFlipped] = useState<Set<number>>(new Set());
    const [matched, setMatched] = useState<Set<number>>(new Set());
    const [selected, setSelected] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);
    const [won, setWon] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setCards(buildCards());
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleClick = useCallback(
        (index: number) => {
            if (isProcessing) return;
            if (flipped.has(index) || matched.has(index)) return;
            if (selected.length >= 2) return;

            const newFlipped = new Set(flipped);
            newFlipped.add(index);
            setFlipped(newFlipped);

            const newSelected = [...selected, index];
            setSelected(newSelected);

            if (newSelected.length === 2) {
                setIsProcessing(true);
                setMoves((m) => m + 1);
                const [first, second] = newSelected;
                const card1 = cards[first];
                const card2 = cards[second];

                if (card1.src === card2.src) {
                    timeoutRef.current = setTimeout(() => {
                        setMatched((prev) => {
                            const next = new Set(prev);
                            next.add(first);
                            next.add(second);
                            if (next.size === cards.length) setWon(true);
                            return next;
                        });
                        setSelected([]);
                        setIsProcessing(false);
                    }, 600);
                } else {
                    timeoutRef.current = setTimeout(() => {
                        setFlipped((prev) => {
                            const next = new Set(prev);
                            next.delete(first);
                            next.delete(second);
                            return next;
                        });
                        setSelected([]);
                        setIsProcessing(false);
                    }, 1000);
                }
            }
        },
        [cards, flipped, matched, selected, isProcessing]
    );

    const resetGame = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setCards(buildCards());
        setFlipped(new Set());
        setMatched(new Set());
        setSelected([]);
        setMoves(0);
        setWon(false);
        setIsProcessing(false);
    }, []);

    return (
        <section id="puzzle" className="py-32 px-6 relative">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="mono-accent text-[#ff3250] mb-4">section 03</p>
                    <h2 className="text-3xl md:text-5xl font-extralight tracking-tight">
                        Memory of <span className="text-[#ff3250]">Us</span>
                    </h2>
                    <p className="text-neutral-500 mt-4 text-sm max-w-md mx-auto">
                        Match the pairs to unlock our memories together. Find all matching
                        photos to complete the heart.
                    </p>
                    <div className="flex items-center justify-center gap-6 mt-6">
                        <span className="mono-accent text-neutral-500">
                            moves: {moves}
                        </span>
                        <span className="mono-accent text-neutral-500">
                            matched: {matched.size / 2} / {cards.length / 2}
                        </span>
                        <button
                            onClick={resetGame}
                            className="mono-accent text-[#ff3250] hover:text-white transition-colors cursor-pointer"
                        >
                            reset
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-1.5 md:gap-2"
                >
                    {heartGrid.map((row, r) => (
                        <div key={r} className="flex gap-1.5 md:gap-2">
                            {row.map((cell, c) => {
                                if (cell === 0) {
                                    return (
                                        <div
                                            key={`${r}-${c}`}
                                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                                        />
                                    );
                                }

                                const card = cards.find(
                                    (cd) => cd.row === r && cd.col === c
                                );
                                if (!card) {
                                    return (
                                        <div
                                            key={`${r}-${c}`}
                                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                                        />
                                    );
                                }

                                const isFlipped = flipped.has(card.index);
                                const isMatched = matched.has(card.index);
                                const showFront = isFlipped || isMatched;

                                return (
                                    <div
                                        key={`${r}-${c}`}
                                        onClick={() => handleClick(card.index)}
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 cursor-pointer"
                                        style={{ perspective: "500px" }}
                                    >
                                        <div
                                            className="relative w-full h-full transition-transform duration-500"
                                            style={{
                                                transformStyle: "preserve-3d",
                                                transform: showFront ? "rotateY(180deg)" : "rotateY(0deg)",
                                            }}
                                        >
                                            <div
                                                className={`absolute inset-0 rounded-md border flex items-center justify-center ${isMatched
                                                    ? "border-[#ff3250]/40 bg-[#ff3250]/10"
                                                    : "border-white/10 bg-white/[0.03] hover:border-[#ff3250]/30 hover:bg-white/[0.06]"
                                                    } transition-all duration-300`}
                                                style={{ backfaceVisibility: "hidden" }}
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill={isMatched ? "#ff3250" : "none"}
                                                    stroke="#ff3250"
                                                    strokeWidth="1.5"
                                                    className="opacity-40"
                                                >
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                                </svg>
                                            </div>

                                            <div
                                                className="absolute inset-0 rounded-md overflow-hidden border border-[#ff3250]/30"
                                                style={{
                                                    backfaceVisibility: "hidden",
                                                    transform: "rotateY(180deg)",
                                                }}
                                            >
                                                <Image
                                                    src={card.src}
                                                    alt="Our memory"
                                                    fill
                                                    className="object-cover"
                                                    sizes="64px"
                                                />
                                                {isMatched && (
                                                    <div className="absolute inset-0 bg-[#ff3250]/10 flex items-center justify-center">
                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="#ff3250"
                                                            className="drop-shadow-lg"
                                                        >
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </motion.div>

                {won && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mt-12"
                    >
                        <p className="text-2xl font-extralight text-[#ff3250] glow-text">
                            You completed our heart, Kathu!
                        </p>
                        <p className="text-neutral-500 text-sm mt-2">
                            Just like you complete mine.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
