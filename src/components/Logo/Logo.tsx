import React, { FC } from "react";
import styles from "./Logo.module.scss";
import LogoPic from "../../assets/Logo/YourDreamHolidaysLogo.svg";

export const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoPic} alt="logo picture" />
    </div>
  );
};
