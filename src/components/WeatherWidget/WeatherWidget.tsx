import React, { FC } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import styles from "./WeatherWidget.module.scss";

export const WeatherWidget: FC = () => {
  return (
    <Card>
      <div className={styles["card-wrapper"]}>
        <Typography>
          <span className={styles["text-header"]}>Weather Forecast</span>
          <span className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            eaque sed aperiam, itaque praesentium, voluptatum, magnam dicta
            deserunt error enim nisi incidunt nostrum mollitia laborum aliquam
            voluptatem provident est. Deleniti!
          </span>
        </Typography>
      </div>
    </Card>
  );
};
