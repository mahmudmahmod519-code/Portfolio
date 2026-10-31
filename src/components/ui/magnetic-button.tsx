import { useRef, type ReactNode } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  strength = 18,
  radius = 120,
  className = '',
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const spring = { stiffness: 200, damping: 15, mass: 0.4 };
  const x = useSpring(useMotionValue(0), spring);
  const y = useSpring(useMotionValue(0), spring);

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return;

    const rect = element.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(dx, dy);

    if (distance > radius) {
      x.set(0);
      y.set(0);
      return;
    }

    const pull = 1 - distance / radius;
    x.set((dx / radius) * strength * pull * 2);
    y.set((dy / radius) * strength * pull * 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onBlur={reset}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full bg-[#1E90FF] px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#1E90FF]/90 focus-visible:ring-2 focus-visible:ring-[#1E90FF] focus-visible:ring-offset-2 focus-visible:outline-none ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default MagneticButton;
