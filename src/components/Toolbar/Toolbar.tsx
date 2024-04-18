import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";

export const Toolbar = (props: {
  setIsSnowing: Dispatch<SetStateAction<boolean>>;
  isSnowing: boolean;
}) => {
  return (
    <div className={styles.toolbar}>
      <label htmlFor="isSnowing">Is Snowing</label>
      <input
        type="checkbox"
        id="isSnowing"
        name="isSnowing"
        onChange={() => {
          props.setIsSnowing(!props.isSnowing);
        }}
      ></input>
    </div>
  );
};
