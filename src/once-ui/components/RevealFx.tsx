'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import styles from './RevealFx.module.scss'; // Import the CSS module for styling

interface RevealFxProps {
  children: React.ReactNode;
  trigger?: boolean;
  autoReveal?: boolean;
  duration?: number; // duration of the reveal animation in ms
  delay?: number; // delay before the reveal starts in ms
  onComplete?: () => void; // callback when reveal is complete
}

const RevealFx: React.FC<RevealFxProps> = ({
  children,
  trigger = false,
  autoReveal = true,
  duration = 1000,
  delay = 0,
  onComplete,
}) => {
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startReveal = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.classList.add(styles.revealed);
      setRevealed(true);

      setTimeout(() => {
        if (onComplete) onComplete();
      }, duration + delay); // Ensure the onComplete triggers after the animation and delays
    }
  }, [duration, delay, onComplete]);

  useEffect(() => {
    if (autoReveal) {
      setTimeout(() => {
        startReveal();
      }, delay);
    }
  }, [autoReveal, delay, startReveal]);

  useEffect(() => {
    if (trigger && !revealed) {
      startReveal();
    }
  }, [trigger, revealed, startReveal]);

  return (
    <div ref={containerRef} className={styles.revealFxContainer}>
      <div className={styles.blurLayer}></div>
      <div className={styles.blurLayer}></div>
      <div className={styles.blurLayer}></div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export { RevealFx };