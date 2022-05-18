import React, { FC } from "react";
import styles from "./Slogan.module.scss";

interface ISloganProps {
  fontSize?: string;
  color?: string;
}

export const Slogan: FC<ISloganProps> = (props) => {
  return (
    <div
      className={styles.wrapper}
      style={{ fontSize: props.fontSize, color: props.color }}
    >
      Your Dream Holidays
    </div>
  );
};
