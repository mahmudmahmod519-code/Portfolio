import React from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';

interface GlowingCardProps {
  className?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const GlowingCard: React.FC<GlowingCardProps> = ({
  className = '',
  width = 256,
  height = 160,
  children,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const RESTING = 'linear-gradient(to right, #e5e7eb, #d1d5db)';

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `
      radial-gradient(
        circle at ${x}px ${y}px,
        color-mix(in oklch, #111827 30%, transparent) 0%,
        transparent 70%
      ),
      ${RESTING}
    `
  );

  const surface = prefersReducedMotion ? RESTING : background;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`relative cursor-pointer overflow-hidden rounded-xl transition-shadow duration-300 ${className}`}
        style={{
          width,
          height,
          background: surface,
        }}
        onMouseMove={prefersReducedMotion ? undefined : handleMouseMove}
        initial={{ background: RESTING }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <motion.div
          className={`absolute inset-[1px] flex flex-col justify-between rounded-[calc(var(--radius)-1px)] p-4 bg-white text-gray-900`}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GlowingCard;
