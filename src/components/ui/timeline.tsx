import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

interface TimelineItem {
  id: string;
  title: string;
  meta?: string;
  body: string;
}

interface TimelineProps {
  items: TimelineItem[];
  container?: React.RefObject<HTMLElement | null>;
  nodeSize?: number;
  smooth?: boolean;
  className?: string;
}

export function Timeline({
  items,
  container,
  nodeSize = 12,
  smooth = true,
  className = '',
}: TimelineProps) {
  const prefersReducedMotion = useReducedMotion();
  const railRef = useRef<HTMLOListElement>(null);

  const { scrollYProgress } = useScroll({
    target: railRef,
    ...(container ? { container } : {}),
    offset: ['start 85%', 'end 65%'],
  });

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  const scaleY = useTransform(
    smooth && !prefersReducedMotion ? smoothed : scrollYProgress,
    (value) => Math.max(value, 0)
  );

  return (
    <ol ref={railRef} className={`relative w-full ${className}`}>
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 w-px border-t border-gray-200"
        style={{ left: nodeSize / 2 }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute top-2 bottom-2 w-px origin-top bg-[#1E90FF]"
        style={{ left: nodeSize / 2, scaleY }}
      />

      {items.map((item, index) => (
        <motion.li
          key={item.id}
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 16, filter: 'blur(4px)' }
          }
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '0px 0px -15% 0px' }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: prefersReducedMotion ? 0 : Math.min(index, 3) * 0.06,
          }}
          className="relative pb-8 last:pb-0"
          style={{ paddingLeft: nodeSize + 20 }}
        >
          <span
            aria-hidden="true"
            className="absolute top-2 rounded-full border-2 border-white bg-[#1E90FF]"
            style={{ left: 0, width: nodeSize, height: nodeSize }}
          />

          {item.meta ? (
            <p className="text-xs text-gray-500">{item.meta}</p>
          ) : null}
          <h3 className="text-sm font-medium">{item.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-500">
            {item.body}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}

export default Timeline;
