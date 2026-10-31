import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface TypingAnimationProps {
  children?: string;
  words?: string[];
  className?: string;
  duration?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  pauseDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  blinkCursor?: boolean;
  cursorStyle?: 'line' | 'block' | 'underscore';
}

export function TypingAnimation({
  children,
  words,
  className,
  duration = 100,
  typeSpeed,
  deleteSpeed,
  delay = 0,
  pauseDelay = 1000,
  loop = false,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = 'line',
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing');
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(elementRef, { amount: 0.3, once: true });

  const wordsToAnimate = useMemo(
    () => words ?? (children ? [children] : []),
    [words, children]
  );
  const hasMultipleWords = wordsToAnimate.length > 1;

  const typingSpeed = typeSpeed ?? duration;
  const deletingSpeed = deleteSpeed ?? typingSpeed / 2;

  const shouldStart = true; // Always start, don't depend on viewport for simplicity
  const animationSourceKey = useMemo(
    () => (words ? words.join('\u0000') : (children ?? '')),
    [words, children]
  );

  useEffect(() => {
    setDisplayedText('');
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setPhase('typing');
  }, [animationSourceKey]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (shouldStart && wordsToAnimate.length > 0) {
      const timeoutDelay =
        delay > 0 && displayedText === ''
          ? delay
          : phase === 'typing'
            ? typingSpeed
            : phase === 'deleting'
              ? deletingSpeed
              : pauseDelay;

      timeout = setTimeout(() => {
        const currentWord = wordsToAnimate[currentWordIndex] || '';
        const graphemes = Array.from(currentWord);

        switch (phase) {
          case 'typing':
            if (currentCharIndex < graphemes.length) {
              setDisplayedText(
                graphemes.slice(0, currentCharIndex + 1).join('')
              );
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              if (hasMultipleWords || loop) {
                const isLastWord =
                  currentWordIndex === wordsToAnimate.length - 1;
                if (!isLastWord || loop) {
                  setPhase('pause');
                }
              }
            }
            break;

          case 'pause':
            setPhase('deleting');
            break;

          case 'deleting':
            if (currentCharIndex > 0) {
              setDisplayedText(
                graphemes.slice(0, currentCharIndex - 1).join('')
              );
              setCurrentCharIndex(currentCharIndex - 1);
            } else {
              const nextIndex = (currentWordIndex + 1) % wordsToAnimate.length;
              setCurrentWordIndex(nextIndex);
              setPhase('typing');
            }
            break;
        }
      }, timeoutDelay);
    }

    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [
    phase,
    currentCharIndex,
    currentWordIndex,
    displayedText,
    wordsToAnimate,
    hasMultipleWords,
    loop,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
    delay,
  ]);

  const currentWordGraphemes = Array.from(
    wordsToAnimate[currentWordIndex] || ''
  );
  const isComplete =
    !loop &&
    currentWordIndex === wordsToAnimate.length - 1 &&
    currentCharIndex >= currentWordGraphemes.length &&
    phase !== 'deleting';

  const shouldShowCursor =
    showCursor &&
    !isComplete &&
    (hasMultipleWords || loop || currentCharIndex < currentWordGraphemes.length);

  const getCursorChar = () => {
    switch (cursorStyle) {
      case 'block':
        return '▌';
      case 'underscore':
        return '_';
      case 'line':
      default:
        return '|';
    }
  };

  return (
    <motion.span
      ref={elementRef}
      className={className}
      style={{
        display: 'inline-block',
        minHeight: '1.2em',
      }}
    >
      {displayedText}
      {shouldShowCursor && (
        <span
          style={{
            display: 'inline-block',
            animation: blinkCursor ? 'blink 1s infinite' : 'none',
          }}
        >
          {getCursorChar()}
        </span>
      )}
    </motion.span>
  );
}
