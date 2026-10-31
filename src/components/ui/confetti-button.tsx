import confetti from 'canvas-confetti';
import { motion, useReducedMotion } from 'framer-motion';
import { type MouseEvent, type ReactNode } from 'react';

interface ConfettiButtonProps {
  children: ReactNode;
  particleCount?: number;
  spread?: number;
  colors?: string[];
  className?: string;
  onClick?: () => void;
}

const DEFAULT_COLORS = ['#7c3aed', '#ec4899', '#06b6d4', '#f59e0b', '#22c55e'];

export function ConfettiButton({
  children,
  particleCount = 90,
  spread = 70,
  colors = DEFAULT_COLORS,
  className = '',
  onClick,
}: ConfettiButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.();
    if (prefersReducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    confetti({
      particleCount,
      spread,
      colors,
      origin: {
        x: (bounds.left + bounds.width / 2) / window.innerWidth,
        y: (bounds.top + bounds.height / 2) / window.innerHeight,
      },
      disableForReducedMotion: true,
    });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 600, damping: 24 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 bg-[#1E90FF] text-sm font-medium text-white transition-colors hover:bg-[#1E90FF]/90 focus-visible:ring-2 focus-visible:ring-[#1E90FF] focus-visible:ring-offset-2 focus-visible:outline-none ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default ConfettiButton;
