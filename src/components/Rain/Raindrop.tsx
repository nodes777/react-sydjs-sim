import { useState } from "react";
import styles from "./styles.module.css";

export const RainDrop = (props: {
  drop: { top: number; left: number; rate: number };
}) => {
  const [rainDrop, setRainDrop] = useState(props.drop);

  const step = () => {
    const { top, left, rate } = rainDrop;
    if (top > window.innerHeight || left < 0) {
      setRainDrop({
        top: 0,
        left: Math.random() * 2 * window.innerWidth,
        rate,
      });
    } else {
      setRainDrop({ top: top + rate, left: left - rate, rate });
    }

    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
  return (
    <div
      className={styles.rainDrop}
      style={{
        left: `${rainDrop.left}px`,
        top: `${rainDrop.top}px`,
      }}
    ></div>
  );
};
