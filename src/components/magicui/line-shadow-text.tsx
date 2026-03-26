'use client';

import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';

interface LineShadowTextProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>, MotionProps {
    shadowColor?: string;
    as?: React.ElementType;
    children: React.ReactNode;
}

export function LineShadowText({
    children,
    shadowColor = 'black',
    className,
    as: Component = 'span',
    ...props
}: LineShadowTextProps) {
    const MotionComponent = motion(Component);

    // Convert named colors to hex/rgb if needed, or rely on CSS context
    // For simplicity, we assume shadowColor is a valid CSS color string.

    return (
        <MotionComponent
            className={cn("relative inline-block", className)}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            <motion.span
                className="absolute inset-0 z-0 text-transparent pointer-events-none"
                style={{
                    textShadow: `2px 2px 0px ${shadowColor}, 4px 4px 0px ${shadowColor}, 6px 6px 0px ${shadowColor}`,
                }}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: 4, y: 4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                aria-hidden="true"
            >
                {children}
            </motion.span>
        </MotionComponent>
    );
}
