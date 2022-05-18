import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../materialuiGlobalTheme/materialuiGlobalTheme";
import { Header } from "../Header/Header";
import { Home } from "../../pages/HomePage/HomePage";
import { Footer } from "../Footer/Footer";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { UserPage } from "../../pages/UserPage/UserPage";
import { CountryPage } from "../../pages/CountryPage/CountryPage";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <main className={styles.wrapper}>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/countrypage/:country" element={<CountryPage />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};
