import React, { FC, MouseEventHandler } from "react";
import styles from "./MyButton.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { variables } from "../../_variables";

interface IMyButtonProps {
  navigate?: MouseEventHandler;
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: variables["primary-color"],
    },
  },
});

export const MyButton: FC<IMyButtonProps> = (props) => {
  return (
    <div className={styles["my-button"]}>
      <ThemeProvider theme={theme}>
        <Stack spacing={2} direction="row">
          <Button onClick={props.navigate} variant="contained">
            Lets Travel
          </Button>
        </Stack>
      </ThemeProvider>
    </div>
  );
};
