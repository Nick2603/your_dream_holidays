import React, { FC } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Slogan } from "../../reusableComponents/Slogan/Slogan";
import { Logo } from "../../reusableComponents/Logo/Logo";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <NavLink to="/">
        <Logo />
      </NavLink>
      <span className={styles.slogan}>
        <NavLink to="/">
          <Slogan />
        </NavLink>
      </span>
    </header>
  );
};
