import { useRef, type ReactNode } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  maxTilt?: number;
  hoverScale?: number;
  glareOpacity?: number;
  className?: string;
}

export function TiltCard({
  children,
  maxTilt = 12,
  hoverScale = 1.03,
  glareOpacity = 0.25,
  className = '',
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const px = useMotionValue('50%');
  const py = useMotionValue('50%');

  const spring = { stiffness: 260, damping: 24, mass: 0.6 };
  const rotateX = useSpring(useMotionValue(0), spring);
  const rotateY = useSpring(useMotionValue(0), spring);
  const scale = useSpring(useMotionValue(1), spring);

  const glareStrength = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 26,
  });

  const glare = useMotionTemplate`radial-gradient(circle at ${px} ${py}, rgba(255,255,255,${glareOpacity}), transparent 60%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    px.set(`${x * 100}%`);
    py.set(`${y * 100}%`);

    rotateX.set(-(y - 0.5) * 2 * maxTilt);
    rotateY.set((x - 0.5) * 2 * maxTilt);
  };

  const enter = () => {
    if (prefersReducedMotion) return;
    scale.set(hoverScale);
    glareStrength.set(1);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    glareStrength.set(0);
    px.set('50%');
    py.set('50%');
  };

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerEnter={enter}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
        className="relative overflow-hidden rounded-2xl border bg-white p-6 shadow-lg"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: glare, opacity: glareStrength }}
        />
        <div style={{ transform: 'translateZ(40px)' }}>{children}</div>
      </motion.div>
    </div>
  );
}

export default TiltCard;
