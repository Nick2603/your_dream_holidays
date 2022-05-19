import React from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const navLinks = ["Home", "User"];

  return (
    <nav>
      <ul className={styles.nav}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={`/${link === "Home" ? "" : link.toLowerCase() + "page"}`}
              className={({ isActive }) =>
                isActive ? styles["active-link"] : ""
              }
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
