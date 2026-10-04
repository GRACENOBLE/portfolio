"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import Link from "next/link";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    icon: React.ReactNode;
    link: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="group relative"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center border border-ink bg-ink px-4 py-2 text-xs text-paper"
              >
                <div className="relative z-30 text-base font-title font-bold">
                  {item.name}
                </div>
                <div className="text-xs text-paper/70">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Link
            href={item.link}
            onMouseMove={handleMouseMove}
            className="relative !m-0 size-12 border border-line object-cover object-top !p-0 transition duration-300 group-hover:z-30 group-hover:bg-ink group-hover:text-paper bg-paper grid place-items-center text-lg"
          >
            {item.icon}
          </Link>
        </div>
      ))}
    </>
  );
};
