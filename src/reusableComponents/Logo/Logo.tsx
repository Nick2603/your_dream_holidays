import React, { FC } from "react";
import styles from "./Logo.module.scss";
import LogoPic from "../../assets/logo/YourDreamHolidaysLogo.svg";

export const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoPic} alt="logo picture" />
    </div>
  );
};
