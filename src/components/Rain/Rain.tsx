import { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from "./styles.module.css";
import { RainDrop } from "./Raindrop";

export const Rain = () => {
  const [rainDrops, setRainDrops] = useState<
    { top: number; left: number; rate: number }[]
  >([]);

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

  useEffect(() => {
    const rainDrops = generateRainDrops();
    setRainDrops(rainDrops);
    document.body.style.overflow = "hidden"; // Hide scrollbar hack
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // const step = () => {
  //   rainDrops.forEach((rainDrop) => {
  //     const { top, left, rate } = rainDrop; // Destructure directly
  //     if (top > window.innerHeight || left < 0) {
  //       // Update state using spread operator
  //       setRainDrops((prevRainDrops) =>
  //         prevRainDrops.map((r) =>
  //           r === rainDrop
  //             ? { top: 0, left: Math.random() * 2 * window.innerWidth, rate }
  //             : r
  //         )
  //       );
  //     } else {
  //       // Update state using spread operator
  //       setRainDrops((prevRainDrops) =>
  //         prevRainDrops.map((r) =>
  //           r === rainDrop ? { top: top + rate, left: left - rate, rate } : r
  //         )
  //       );
  //     }
  //   });
  //   requestAnimationFrame(step);
  // };

  // requestAnimationFrame(step);

  return (
    <div className={styles.rainContainer}>
      {rainDrops.map((rainDrop, i) => (
        <RainDrop key={i} drop={rainDrop} />
      ))}
    </div>
  );
};
