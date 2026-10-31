import { motion, useReducedMotion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  from?: string;
  via?: string;
  duration?: number;
  className?: string;
}

export function GradientText({
  text,
  from = '#1E90FF',
  via = '#FF69B4',
  duration = 4,
  className = '',
}: GradientTextProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      style={{
        backgroundImage: `linear-gradient(90deg, ${from}, ${via}, ${from}, ${via}, ${from})`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{
        backgroundPosition: prefersReducedMotion ? '0% 50%' : '200% 50%',
      }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration, ease: 'linear', repeat: Infinity }
      }
      className={`inline-block ${className}`}
    >
      {text}
    </motion.span>
  );
}

export default GradientText;
