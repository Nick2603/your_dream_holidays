import React, { FC } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardContentCustomStyles } from "../../styles/CardContentCustomStyles";
import styles from "./CountryInfo.module.scss";

export const CountryInfo: FC = () => {
  return (
    <Card>
      <CardContentCustomStyles>
        <Typography>
          <span className={styles["text-header"]}>Germany</span>
          <span className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            et. Expedita ullam labore reiciendis tempora similique harum autem,
            non sapiente magni praesentium quod qui exercitationem dignissimos
            repellendus necessitatibus debitis temporibus. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Cumque, et. Expedita ullam
            labore reiciendis tempora similique harum autem, non sapiente magni
            praesentium quod qui exercitationem dignissimos repellendus
            necessitatibus debitis temporibus. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Cumque, et. Expedita ullam labore
            reiciendis tempora similique harum autem, non sapiente magni
            praesentium quod qui exercitationem dignissimos repellendus
            necessitatibus debitis temporibus. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Cumque, et. Expedita ullam labore
            reiciendis tempora similique harum autem, non sapiente magni
            praesentium quod qui exercitationem dignissimos repellendus
            necessitatibus debitis temporibus.
          </span>
        </Typography>
      </CardContentCustomStyles>
    </Card>
  );
};
