import React from "react";
import Header from "./header/header";
import Footer from "../footer/footer";
import CategoriesSlider from "../categories/categories";
import TopItemAndPrice from "../common/topItemAndPrice/topItemAndPrice";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <CategoriesSlider />
      {children}
      <TopItemAndPrice />
      <Footer />
    </>
  );
};

export default Layout;
