import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";

export const Navbar: React.FC = (props) => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  const paths = ["home", "recipes", "about", "contact us"];
  return (
    <div>
      <ul className="w-full bg-primary flex-row justify-center text-white hidden sm:flex">
        {paths.map((path, index) => (
          <li
            key={index}
            className="px-5 py-3 hover:cursor-pointer uppercase"
            onClick={() => {
              if (path.includes("home") || path.includes("recipes")) {
                router.push("/");
              } else {
                router.push(path.split(" ")[0]);
              }
            }}
          >
            {path}
          </li>
        ))}
      </ul>
      <div
        className="flex justify-end sm:hidden bg-primary h-[3rem] items-center"
        onClick={navHandler}
      >
        {nav ? (
          <AiOutlineClose size={30} className="text-white mr-2" />
        ) : (
          <AiOutlineMenu size={30} className="text-white mr-2" />
        )}
      </div>
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-primary transition-transform ${
          nav ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-white m-4">MENU</h1>
        <ul>
          {paths.map((path, index) => (
            <li
              key={index}
              className="uppercase p-4 border-b text-white"
              onClick={() => {
                if (path.includes("home") || path.includes("recipes")) {
                  router.push("/");
                } else {
                  router.push(path.split(" ")[0]);
                }
              }}
            >
              {path}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
