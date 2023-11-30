import React from "react";
import Image from "next/image";
import bg from "../../assets/bgImage.jpg";
import logo from "../../assets/logo.png";

export const Hero: React.FC = (props) => {
  return (
    <div
      className="w-full bg-cover h-[100vh] sm:h-[20rem]"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="rounded-full bg-white w-[25rem] sm:w-[12rem]">
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};
