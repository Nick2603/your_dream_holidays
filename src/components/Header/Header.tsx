import React, { FC } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Slogan } from "../Slogan/Slogan";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <span className={styles.slogan}>
        <NavLink to="/">
          <Slogan />
        </NavLink>
      </span>
    </header>
  );
};
