import React from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const navLinks = ["Home", "Country", "User"];

  return (
    <nav>
      <ul className={styles.nav}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={`/${link === "Home" ? "" : link.toLowerCase() + "page"}`}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
