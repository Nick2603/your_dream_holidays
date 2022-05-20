import React, { FC, MouseEventHandler } from "react";
import styles from "./CustomButton.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface ICustomButtonProps {
  eventHandler?: MouseEventHandler;
  text?: string;
}

export const CustomButton: FC<ICustomButtonProps> = (props) => {
  return (
    <div className={styles["my-button"]}>
      <Stack spacing={2} direction="row">
        <Button onClick={props.eventHandler} variant="contained">
          {props.text}
        </Button>
      </Stack>
    </div>
  );
};
