import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export const Sapling = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsAnimating(false), 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={isAnimating ? styles.saplingAnimate : styles.sapling}>
      🌿
    </div>
  );
};
