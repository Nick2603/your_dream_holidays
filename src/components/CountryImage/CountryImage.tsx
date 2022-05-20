import React, { FC } from "react";
import GermanyImage from "./GermanyImage.jpg";
import Card from "@mui/material/Card";
import { CardContentCustomStyles } from "../../styles/CardContentCustomStyles";
import styles from "./CountryImage.module.scss";

export const CountryImage: FC = () => {
  return (
    <Card>
      <CardContentCustomStyles>
        <img className={styles.img} src={GermanyImage} alt="Germany image" />
      </CardContentCustomStyles>
    </Card>
  );
};
