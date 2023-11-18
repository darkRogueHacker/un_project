import React from "react";
import { Outlet } from "react-router-dom";
import "./page.css";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const Page = () => {
  return (
    <div className="app__layout w-100 h-100 d-flex flex-column">
      <>
        <Navbar />
        <Header />
      </>

      <main className="flex-1">
        <div className="w-100 h-100">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
