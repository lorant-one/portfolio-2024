"use client";

import React, { CSSProperties, forwardRef, useEffect, useState } from 'react';

interface BackgroundProps {
    position?: CSSProperties['position'];
    gradient?: boolean;
    dots?: boolean;
    lines?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(({
    position = 'fixed',
    gradient = true,
    dots = true,
    lines = true,
    className,
    style
}, ref) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
    const maskSize = 1200;

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setCursorPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        let animationFrameId: number;

        const updateSmoothPosition = () => {
            setSmoothPosition((prev) => {
                const dx = cursorPosition.x - prev.x;
                const dy = cursorPosition.y - prev.y;
                const easingFactor = 0.05;

                return {
                    x: Math.round(prev.x + dx * easingFactor),
                    y: Math.round(prev.y + dy * easingFactor),
                };
            });
            animationFrameId = requestAnimationFrame(updateSmoothPosition);
        };

        animationFrameId = requestAnimationFrame(updateSmoothPosition);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [cursorPosition]);

    return (
        <>
            {gradient && (
                <div
                    ref={ref}
                    className={className}
                    style={{
                        position: position,
                        top: '0',
                        left: '0',
                        zIndex: '0',
                        width: '100%',
                        height: '100%',
                        filter: 'contrast(1.5)',
                        background: 'radial-gradient(100% 100% at 49.99% 0%, var(--static-transparent) 0%, var(--page-background) 100%), radial-gradient(87.4% 84.04% at 6.82% 16.24%, var(--brand-background-medium) 0%, var(--static-transparent) 100%), radial-gradient(217.89% 126.62% at 48.04% 0%, var(--accent-solid-medium) 0%, var(--static-transparent) 100%)',
                        ...style,
                    }}>
                </div>
            )}
            {dots && (
                <div
                    ref={ref}
                    className={className}
                    style={{
                        position: position,
                        zIndex: '0',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'radial-gradient(var(--brand-on-background-weak) 0.5px, var(--static-transparent) 0.5px)',
                        opacity: '0.25',
                        backgroundSize: 'var(--static-space-16) var(--static-space-16)',
                        ...style,
                    }}>
                </div>
            )}
            {lines && (
                <div
                    ref={ref}
                    className={className}
                    style={{
                        position: position,
                        zIndex: '0',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'repeating-linear-gradient(45deg, var(--brand-on-background-weak) 0, var(--brand-on-background-weak) 0.5px, var(--static-transparent) 0.5px, var(--static-transparent) var(--static-space-8))',
                        maskImage: `radial-gradient(circle ${maskSize / 2}px at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`,
                        maskSize: '100% 100%',
                        maskRepeat: 'no-repeat',
                        opacity: '0.2',
                        ...style,
                    }}>
                </div>
            )}
        </>
    );
});

Background.displayName = 'Background';

export { Background };