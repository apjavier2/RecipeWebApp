import { getRecipes } from "@/store/api/api";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { MenuItem } from "./components/MenuItem";
import { RecipeModal } from "./RecipeModal";

export const Menu = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipes(),
  });

  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  return (
    <div>
      <div className="pt-4">
        {isLoading ? (
          <div></div>
        ) : (
          data.map((recipe: any, index: number) => (
            <div className="px-[10rem] py-1" key={recipe.uuid}>
              <MenuItem
                title={recipe.title}
                images={recipe.images}
                description={recipe.description}
                reverse={index % 2 !== 0}
                onViewRecipe={() => {
                  setSelectedRecipe(recipe);
                }}
              />
            </div>
          ))
        )}
      </div>
      {selectedRecipe && (
        <RecipeModal
          isOpen={selectedRecipe !== null}
          selectedRecipe={selectedRecipe}
          onClose={() => {
            setSelectedRecipe(null);
          }}
        />
      )}
    </div>
  );
};
