import React, { FC } from "react";
import styles from "./HomePage.module.scss";
import { CountrySelect } from "../../CountrySelect/CountrySelect";
import { Slogan } from "../../Slogan/Slogan";
import { variables } from "../../../_variables";

export const Home: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Slogan fontSize="35px" color={variables["primary-color"]} />
      <CountrySelect />
    </div>
  );
};
