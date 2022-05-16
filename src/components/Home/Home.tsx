import React, { FC } from "react";
import styles from "./Home.module.scss";
import { CountrySelect } from "../CountrySelect/CountrySelect";
import { Slogan } from "../Slogan/Slogan";

export const Home: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Slogan fontSize="35px" />
      <CountrySelect />
    </div>
  );
};
