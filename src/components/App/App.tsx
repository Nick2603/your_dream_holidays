import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Header } from "../Header/Header";
import { Home } from "../Pages/HomePage/HomePage";
import { Footer } from "../Footer/Footer";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { UserPage } from "../Pages/UserPage/UserPage";
import { CountryPage } from "../Pages/CountryPage/CountryPage";

export const App: FC = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
