import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    duration?: number;
    variant?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';
    className?: string; // Allow passing classes for layout
}

export const Reveal = ({
    children,
    width = 'fit-content',
    delay = 0,
    duration = 0.5,
    variant = 'fade-up',
    className = ""
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const getVariants = () => {
        switch (variant) {
            case 'fade-in':
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
            case 'slide-left':
                return {
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'slide-right':
                return {
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'zoom-in':
                return {
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                };
            case 'fade-up':
            default:
                return {
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                };
        }
    };

    return (
        <div ref={ref} style={{ position: 'relative', width }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={controls}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
