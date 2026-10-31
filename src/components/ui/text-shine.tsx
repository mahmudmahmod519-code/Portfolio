import { motion, useAnimationControls, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

interface TextShineProps {
  text: string;
  shineColor?: string;
  baseColor?: string;
  duration?: number;
  className?: string;
}

export function TextShine({
  text,
  shineColor = '#FFD700',
  baseColor = 'var(--color-dark)',
  duration = 5,
  className = '',
}: TextShineProps) {
  const controls = useAnimationControls();
  const textRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const updateAnimation = useCallback(() => {
    const element = textRef.current;
    if (!element || prefersReducedMotion) return;

    const textWidth = element.offsetWidth;

    controls.start({
      backgroundPosition: [`${textWidth * -0.5}px`, `${textWidth * 1.25}px`],
      transition: { duration, ease: 'linear', repeat: Infinity },
    });
  }, [controls, duration, prefersReducedMotion]);

  useEffect(() => {
    updateAnimation();
    window.addEventListener('resize', updateAnimation);
    return () => window.removeEventListener('resize', updateAnimation);
  }, [updateAnimation]);

  return (
    <motion.span
      ref={textRef}
      className={`relative w-fit bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${baseColor} 0%, ${shineColor} 10%, ${baseColor} 20%)`,
        backgroundSize: '200%',
      }}
      animate={controls}
    >
      {text}
    </motion.span>
  );
}

export default TextShine;
