import React from "react";

export interface IngredientsProps {
  ingredients: any[];
}

export const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => {
  return (
    <div className="sm:w-[35%] pl-1">
      <div className="text-[1.25rem] uppercase tracking-wider font-medium mb-2">
        Ingredients
      </div>
      <ul className="list-disc pl-6">
        {ingredients.map((ingredient) => (
          <li key={ingredient.uuid}>
            {`${ingredient.name} - ${ingredient.amount} x ${ingredient.measurements}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
