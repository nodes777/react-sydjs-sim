import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";
import { RainDrop } from "./Raindrop";

const generateRainDrops = () => {
  const newRainDrops = [];
  for (let i = 0; i < 1000; i++) {
    const left = Math.random() * 2 * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    const rate = Math.random() * 4 + 1;

    // Create raindrop object with initial state
    newRainDrops.push({ top, left, rate });
  }
  return newRainDrops;
};

export const Rain = () => {
  const [rainDrops, setRainDrops] = useState<
    { top: number; left: number; rate: number }[]
  >(generateRainDrops());

  const snowRef = useRef<number>();

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Hide scrollbar hack
    snowRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(snowRef.current ?? 0);
  }, []);

  const step = () => {
    // const newDrops = rainDrops.map((rainDrop) => {
    //   const { top, left, rate } = rainDrop;
    //   if (top > window.innerHeight || left < 0) {
    //     return { top: 0, left: Math.random() * 2 * window.innerWidth, rate };
    //   } else {
    //     return { top: top + rate, left: left - rate, rate };
    //   }
    // });
    setRainDrops((prevRainDrops) =>
      prevRainDrops.map((rainDrop) => {
        const { top, left, rate } = rainDrop;
        if (top > window.innerHeight || left < 0) {
          return { top: 0, left: Math.random() * 2 * window.innerWidth, rate };
        } else {
          return { top: top + rate, left: left - rate, rate };
        }
      })
    );

    snowRef.current = requestAnimationFrame(step);
  };

  return (
    <div className={styles.rainContainer}>
      {rainDrops.map((rainDrop, i) => (
        <div
          key={i}
          className={styles.rainDrop}
          style={{
            left: `${rainDrop.left}px`,
            top: `${rainDrop.top}px`,
          }}
        />
      ))}
    </div>
  );
};
