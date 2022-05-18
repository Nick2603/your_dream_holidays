import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./CountryPage.module.scss";

export const CountryPage: FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  });

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
