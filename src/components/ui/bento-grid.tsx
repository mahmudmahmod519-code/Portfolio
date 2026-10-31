import type { CSSProperties, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface BentoGridProps {
  children: ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

interface BentoCardProps {
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

export function BentoGrid({
  children,
  columns = 3,
  gap = 16,
  className = '',
}: BentoGridProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-${columns} gap-${gap} ${className}`}
      style={{
        '--bento-columns': String(columns),
        gap,
      } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  colSpan = 1,
  rowSpan = 1,
  className = '',
}: BentoCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border bg-white p-5 shadow-sm ${className}`}
      style={{
        '--bento-col-span': String(colSpan),
        '--bento-row-span': String(rowSpan),
      } as CSSProperties}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
    >
      {children}
    </motion.div>
  );
}

export default BentoGrid;
