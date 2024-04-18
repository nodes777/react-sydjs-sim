import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const Snowflake = () => {
  const [snowflake, setSnowflake] = useState({
    top: Math.random() * window.innerHeight,
    left: Math.random() * 2 * window.innerWidth,
    rate: Math.random() * 4 + 1,
  });

  let animationFrameId: number | null = null; // Stores the animation frame ID

  useEffect(() => {
    const animate = () => {
      setSnowflake((prevSnowflake) => {
        if (prevSnowflake.top > window.innerHeight || prevSnowflake.left < 0) {
          return {
            rate: prevSnowflake.rate,
            top: 0,
            left: Math.random() * 2 * window.innerWidth,
          };
        } else {
          return {
            rate: prevSnowflake.rate,
            top: prevSnowflake.top + prevSnowflake.rate,
            left: prevSnowflake.left - prevSnowflake.rate,
          };
        }
      });

      // Cancel previous frame before scheduling a new one
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function to stop animation on unmount
    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const posStyles = {
    top: `${snowflake.top}px`,
    left: `${snowflake.left}px`,
  };

  return <div className={styles.snowFlake} style={posStyles} />;
};
