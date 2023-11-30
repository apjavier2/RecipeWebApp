import { findIngredientsSpecials } from "@/utils/findIngredientSpecials";
import React, { useContext } from "react";
import { MenuContext, MenuContextProps } from "../Menu";

export interface IngredientsProps {
  ingredients: any[];
}

export const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => {
  const { specials } = useContext(MenuContext) as MenuContextProps;
  return (
    <div className="sm:w-[35%] pl-1">
      <div className="text-[1.25rem] uppercase tracking-wider font-medium mb-2">
        Ingredients
      </div>
      <ul className="list-disc pl-6">
        {ingredients.map((ingredient) => {
          const specialIngredients = findIngredientsSpecials(
            specials,
            ingredient.uuid
          );
          return (
            <li key={ingredient.uuid}>
              {`${ingredient.name} - ${ingredient.amount} x ${ingredient.measurement}`}
              {
                <ul className="list-disc pl-6">
                  {specialIngredients.map((special: any) => {
                    return (
                      <div key={special.uuid}>
                        <li>{special.title}</li>
                        <li>{special.text}</li>
                      </div>
                    );
                  })}
                </ul>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};
