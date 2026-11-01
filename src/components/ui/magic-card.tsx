import React, { useCallback, useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientFrom = '#9E7AFF',
  gradientTo = '#FE8BBB',
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const modeRef = useRef('gradient');
  const gradientSizeRef = useRef(gradientSize);

  useEffect(() => {
    modeRef.current = 'gradient';
  }, []);

  useEffect(() => {
    gradientSizeRef.current = gradientSize;
  }, [gradientSize]);

  const reset = useCallback(() => {
    const off = -gradientSizeRef.current;
    mouseX.set(off);
    mouseY.set(off);
  }, [mouseX, mouseY]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <motion.div
      className={`group relative isolate overflow-hidden rounded-[inherit] border border-transparent ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => reset()}
      onPointerEnter={() => reset()}
      style={{
        background: useMotionTemplate`
          linear-gradient(var(--color-white) 0 0) padding-box,
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            ${gradientFrom},
            ${gradientTo},
            var(--color-white) 100%
          ) border-box
        `,
      }}
    >
      <div className="bg-white absolute inset-0 z-20 rounded-[inherit]" />
      <motion.div
        suppressHydrationWarning
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              #262626,
              transparent 100%
            )
          `,
          opacity: 0.8,
        }}
      />
      <div className="relative z-40">{children}</div>
    </motion.div>
  );
}

export default MagicCard;
