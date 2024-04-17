import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";
import { snowFlake } from "./SnowFlake";

const generateSnowFlakes = () => {
  const newSnowFlakes = [];
  for (let i = 0; i < 1000; i++) {
    const left = Math.random() * 2 * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    const rate = Math.random() * 4 + 1;

    // Create snowFlake object with initial state
    newSnowFlakes.push({ top, left, rate });
  }
  return newSnowFlakes;
};

export const Snow = () => {
  const [snowFlakes, setSnowFlakes] = useState<
    { top: number; left: number; rate: number }[]
  >(generateSnowFlakes());

  const snowRef = useRef<number>();

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Hide scrollbar hack
    snowRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(snowRef.current ?? 0);
  }, []);

  const step = () => {
    // const newDrops = snowFlakes.map((snowFlake) => {
    //   const { top, left, rate } = snowFlake;
    //   if (top > window.innerHeight || left < 0) {
    //     return { top: 0, left: Math.random() * 2 * window.innerWidth, rate };
    //   } else {
    //     return { top: top + rate, left: left - rate, rate };
    //   }
    // });
    setSnowFlakes((prevsnowFlakes) =>
      prevsnowFlakes.map((snowFlake) => {
        const { top, left, rate } = snowFlake;
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
    <div className={styles.snowContainer}>
      {snowFlakes.map((snowFlake, i) => (
        <div
          key={i}
          className={styles.snowFlake}
          style={{
            left: `${snowFlake.left}px`,
            top: `${snowFlake.top}px`,
          }}
        />
      ))}
    </div>
  );
};
