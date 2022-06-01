import React, { FC } from "react";
import Card from "@mui/material/Card";
import styles from "./CovidRestrictions.module.scss";

export const CovidRestrictions: FC = () => {
  return (
    <Card>
      <div className={styles["card-wrapper"]}>
        <span className={styles["text-header"]}>Covid restrictions</span>
        <span className={styles.text}>
          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium facilis quidem dolorem sapiente repudiandae!
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium facilis quidem dolorem sapiente repudiandae!
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium facilis quidem dolorem sapiente repudiandae!
            </li>
          </ul>
        </span>
      </div>
    </Card>
  );
};
