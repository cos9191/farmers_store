import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import PageWrapper from "/src/components/blocks/page-wrapper/page-wrapper";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";
// DATA
import features from "/src/mocks/features";
import buyOptions from "/src/mocks/buyOptions";
// STYLES
import { GlobalStyle } from "./styles";
// PAGES
import MainPage from "/src/components/pages/main-page/main-page";
import OrderPage from "/src/components/pages/order-page/order-page";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<OrderPage buyOptions={buyOptions} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
