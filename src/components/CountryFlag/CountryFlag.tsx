import React, { FC } from "react";
import GermanyFlag from "./GermanyFlag.svg";
import Card from "@mui/material/Card";
import styles from "./CountryFlag.module.scss";

export const CountryFlag: FC = () => {
  return (
    <Card>
      <div className={styles["card-wrapper"]}>
        <img className={styles.img} src={GermanyFlag} alt="Germany flag" />
      </div>
    </Card>
  );
};
