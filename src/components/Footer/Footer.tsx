import React, { FC } from "react";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <span>2012 - 2022 All rights reserved</span>
    </footer>
  );
};
