import React, { FC } from "react";
import styles from "./CountryPage.module.scss";

export const CountryPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["country-pic"]}>country-pic</div>
      <div className={styles["country-flag"]}>country-flag</div>
      <div className={styles["weather-widget"]}>weather-widget</div>
      <div className={styles["actions-list"]}>actions-list</div>
      <div className={styles["country-info"]}>country-info</div>
      <div className={styles["sightseeings-widget"]}>sightseeings-widget</div>
      <div className={styles["covid-restriction"]}>covid-restriction</div>
    </div>
  );
};
