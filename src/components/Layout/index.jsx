import React from "react";
import Nav from "../Nav";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Nav />
      <main className="mt-6 md:mt-12 min-h-[60vh] bg-primary-light-pink">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
