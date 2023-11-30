import React from "react";
import Image from "next/image";
import bg from "../../assets/bgImage.jpg";

export const Hero: React.FC = (props) => {
  return (
    <div className="w-full">
      <Image
        src={bg}
        alt="bg"
        className=" h-[100vh] sm:h-[30vh] object-cover"
      />
    </div>
  );
};
