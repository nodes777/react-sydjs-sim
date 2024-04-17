import { useState } from "react";
import styles from "./styles.module.css";

export const snowFlake = (props: {
  drop: { top: number; left: number; rate: number };
}) => {
  const [snowFlake, setsnowFlake] = useState(props.drop);

  const step = () => {
    const { top, left, rate } = snowFlake;
    if (top > window.innerHeight || left < 0) {
      setsnowFlake({
        top: 0,
        left: Math.random() * 2 * window.innerWidth,
        rate,
      });
    } else {
      setsnowFlake({ top: top + rate, left: left - rate, rate });
    }

    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
  return (
    <div
      className={styles.snowFlake}
      style={{
        left: `${snowFlake.left}px`,
        top: `${snowFlake.top}px`,
      }}
    ></div>
  );
};
