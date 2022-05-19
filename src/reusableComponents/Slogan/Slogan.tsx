import React, { FC } from "react";
import styles from "./Slogan.module.scss";
import { Typography } from "@mui/material";

interface ISloganProps {
  fontSize?: string;
  color?: string;
}

export const Slogan: FC<ISloganProps> = (props) => {
  return (
    <h6 className={styles.wrapper}>
      <Typography fontSize={props.fontSize} color={props.color}>
        Your Dream Holidays
      </Typography>
    </h6>
  );
};
