import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";
import { Footer } from "../Footer/Footer";
import { NotFoundPage } from "../NotFoundPage";
import { UserPage } from "../UserPage/UserPage";
import { CountryPage } from "../CountryPage/CountryPage";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <main>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/countrypage" element={<CountryPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
