import React from "react";
import { BG_URL } from "../utils/constants";
import Header from "../components/Header";

function Layout1({ children }) {
  return (
    <div className="bg-black bg-opacity-90">
      <div
        className="absolute"
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      >
        <img
          className="h-screen object-cover md:h-auto w-full"
          src={BG_URL}
          alt="background-img"
        />
      </div>
      <Header />
      {children}
    </div>
  );
}

export default Layout1;
