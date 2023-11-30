import React from "react";
import Image from "next/image";

export interface MenuItemProps {
  title: string;
  images: {
    full: string;
  };
  description: string;
  reverse?: boolean;
  cookTime?: number;
  prepTime?: number;
  servings?: number;
  onViewRecipe?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  images,
  description,
  reverse = false,
  onViewRecipe,
  cookTime,
  prepTime,
  servings,
}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row py-4">
      <Image
        src={`http://localhost:3001${images.full}`}
        alt="bg"
        className={`${
          reverse ? "sm:order-2" : "sm:order-1"
        } sm:w-[40%] w-[100%] h-full object-fill`}
        width={400}
        height={400}
      />

      <div
        className={`${
          reverse ? "order-1 sm:mr-4 sm:items-end" : "sm:order-2 sm:ml-4"
        } flex flex-col sm:w-[60%]`}
      >
        <div className="text-primary font-bold text-[1.3rem] mb-2">{title}</div>
        <div className="text-primary">{description}</div>
        {onViewRecipe ? (
          <button
            className={`bg-primary rounded-md text-secondary p-2 sm:mt-auto ${
              reverse ? "sm:mr-auto" : "sm:ml-auto"
            } w-[7rem] font-semibold mt-[2rem]`}
            onClick={onViewRecipe}
          >
            View Recipe
          </button>
        ) : (
          <div className="flex justify-between mt-auto pr-10">
            <div>
              <span className="font-medium">Cooking Time:</span> {cookTime}
            </div>
            <div>
              <span className="font-medium">Prep Time:</span> {prepTime}
            </div>
            <div>
              <span className="font-medium">Servings Time:</span> {servings}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
