import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";

export const Toolbar = (props: {
  setIsRaining: Dispatch<SetStateAction<boolean>>;
  isRaining: boolean;
}) => {
  return (
    <div className={styles.toolbar}>
      <label htmlFor="isRaining">Is Snowing</label>
      <input
        type="checkbox"
        id="isRaining"
        name="isRaining"
        onChange={() => {
          props.setIsRaining(!props.isRaining);
        }}
      ></input>
    </div>
  );
};
