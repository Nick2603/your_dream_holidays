import React, { FC } from "react";
import GermanyImage from "./GermanyImage.jpg";
import Card from "@mui/material/Card";
import styles from "./CountryImage.module.scss";

export const CountryImage: FC = () => {
  return (
    <Card>
      <div className={styles["card-wrapper"]}>
        <img className={styles.img} src={GermanyImage} alt="Germany image" />
      </div>
    </Card>
  );
};
