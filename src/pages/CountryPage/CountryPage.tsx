import React, { FC } from "react";
import styles from "./CountryPage.module.scss";
import { CountryFlag } from "../../components/CountryFlag/CountryFlag";
import { CountryImage } from "../../components/CountryImage/CountryImage";
import { CountryInfo } from "../../components/CountryInfo/CountryInfo";
import { CountryActionsList } from "../../components/CountryActionsList/CountryActionsList";

export const CountryPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["country-pic"]}>
        <CountryImage />
      </div>
      <div className={styles["country-flag"]}>
        <CountryFlag />
      </div>
      <div className={styles["weather-widget"]}>weather-widget</div>
      <div className={styles["actions-list"]}>
        <CountryActionsList />
      </div>
      <div className={styles["country-info"]}>
        <CountryInfo />
      </div>
      <div className={styles["sightseeings-widget"]}>sightseeings-widget</div>
      <div className={styles["covid-restriction"]}>covid-restriction</div>
    </div>
  );
};
