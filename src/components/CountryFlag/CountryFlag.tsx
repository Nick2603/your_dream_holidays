import React, { FC } from "react";
import GermanyFlag from "./GermanyFlag.svg";
import Card from "@mui/material/Card";
import { CardContentCustomStyles } from "../../styles/CardContentCustomStyles";
import styles from "./CountryFlag.module.scss";

export const CountryFlag: FC = () => {
  return (
    <Card>
      <CardContentCustomStyles>
        <img className={styles.img} src={GermanyFlag} alt="Germany flag" />
      </CardContentCustomStyles>
    </Card>
  );
};
