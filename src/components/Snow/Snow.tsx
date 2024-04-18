import { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { Snowflake } from "./Snowflake";

export const Snow = () => {
  const [snowFlakes, setSnowFlakes] = useState<
    { top: number; left: number; rate: number }[]
  >([]);

  const generateSnowFlakes = () => {
    const newSnowFlakes = [];
    for (let i = 0; i < 1000; i++) {
      const left = Math.random() * 2 * window.innerWidth;
      const top = Math.random() * window.innerHeight;
      const rate = Math.random() * 4 + 1;

      newSnowFlakes.push({ top, left, rate });
    }
    return newSnowFlakes;
  };

  useEffect(() => {
    const snowFlakes = generateSnowFlakes();
    setSnowFlakes(snowFlakes);
    document.body.style.overflow = "hidden"; // Hide scrollbar hack
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.snowContainer}>
      {snowFlakes.map((rainDrop, i) => (
        <Snowflake key={i} />
      ))}
    </div>
  );
};
