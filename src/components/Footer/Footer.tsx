import React, { FC } from "react";
import styles from "./Footer.module.scss";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <span>© 2022 Your Dream Holidays, Inc.</span>
      <SocialMedia />
    </footer>
  );
};
