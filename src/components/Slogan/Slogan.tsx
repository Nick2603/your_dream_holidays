import React, { FC } from "react";
import styles from "./Slogan.module.scss";

interface ISloganProps {
  fontSize?: string;
}

export const Slogan: FC<ISloganProps> = (props) => {
  return (
    <div className={styles.wrapper} style={{ fontSize: props.fontSize }}>
      Your Dream Holidays
    </div>
  );
};
