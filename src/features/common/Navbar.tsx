import { useRouter } from "next/router";
import React from "react";

export const Navbar: React.FC = (props) => {
  const router = useRouter();
  const paths = ["home", "recipes", "about", "contact us"];
  return (
    <div className="w-full bg-primary flex flex-row justify-center text-white">
      {paths.map((path, index) => (
        <ul
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
        </ul>
      ))}
    </div>
  );
};
