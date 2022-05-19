import React, { FC } from "react";
import styles from "./HomePage.module.scss";
import { CountrySelect } from "../../components/CountrySelect/CountrySelect";
import { Slogan } from "../../reusableComponents/Slogan/Slogan";

export const Home: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Slogan fontSize="35px" color="primary" />
      <CountrySelect />
    </div>
  );
};
