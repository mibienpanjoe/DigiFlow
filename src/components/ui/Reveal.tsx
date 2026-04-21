import { useRef } from 'react';
import { motion, useInView, type Variants } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
  width?: 'fit-content' | '100%';
  variant?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';
}

const directionMap = {
  up: { y: 40, x: 0 },
  left: { y: 0, x: -40 },
  right: { y: 0, x: 40 },
  none: { y: 0, x: 0 },
};

const variantMap: Record<string, Variants> = {
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

const Reveal = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  width = 'fit-content',
  variant,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const resolvedVariant = variant
    ? variantMap[variant] ?? { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, ...directionMap[direction] },
        visible: { opacity: 1, y: 0, x: 0 },
      };

  return (
    <div ref={ref} className={className} style={{ width, height: className.includes('h-full') ? '100%' : undefined }}>
      <motion.div
        style={{ height: className.includes('h-full') ? '100%' : undefined }}
        variants={resolvedVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
