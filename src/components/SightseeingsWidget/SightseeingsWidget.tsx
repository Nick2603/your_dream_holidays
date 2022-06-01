import React, { FC } from "react";
import Card from "@mui/material/Card";
import styles from "./SightseeingsWidget.module.scss";

export const SightseeingsWidget: FC = () => {
  return (
    <Card>
      <div className={styles["card-wrapper"]}>
        <span className={styles["text-header"]}>Sightseeings</span>
        <span className={styles.text}>
          <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </span>
      </div>
    </Card>
  );
};
