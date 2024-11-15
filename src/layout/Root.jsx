import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export default function Root() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
}
