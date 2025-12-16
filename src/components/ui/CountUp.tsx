import { useEffect, useState, useRef } from 'react';
import { useInView, useSpring, useMotionValue } from 'motion/react';

interface CountUpProps {
    to: number;
    from?: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

const CountUp = ({ to, from = 0, duration = 2, suffix = "", className = "" }: CountUpProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
        duration: duration * 1000 // spring doesn't use duration directly in seconds but we can approximate or just set value
    });
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState(from);

    // When in view, animate the motion value to the target
    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, to, motionValue]);

    // Sync the spring value to state for rendering
    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
        return () => unsubscribe();
    }, [springValue]);

    return (
        <span ref={ref} className={className}>
            {displayValue}{suffix}
        </span>
    );
};

export default CountUp;
