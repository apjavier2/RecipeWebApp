import React from "react";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h- bg-white">
      <Hero />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
