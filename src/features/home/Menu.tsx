import { getRecipes, getSpecials } from "@/store/api/api";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useMemo, useState } from "react";
import { MenuItem } from "./components/MenuItem";
import { RecipeModal } from "./RecipeModal";

export interface MenuContextProps {
  specials: any[];
}

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);

export const Menu = () => {
  const { isLoading: recipesLoading, data: recipesData } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipes(),
  });

  const { isLoading: specialsLoading, data: specialsData } = useQuery({
    queryKey: ["specials"],
    queryFn: () => getSpecials(),
  });

  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const contextValue = useMemo(() => {
    return { specials: specialsData };
  }, [specialsData]);

  return (
    <div>
      <div className="pt-4">
        {recipesLoading ? (
          <div>Loading Recipes...</div>
        ) : (
          recipesData.map((recipe: any, index: number) => (
            <div className="px-[2rem] sm:px-[10rem] py-1" key={recipe.uuid}>
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
      {selectedRecipe && !specialsLoading && (
        <MenuContext.Provider value={contextValue}>
          <RecipeModal
            isOpen={selectedRecipe !== null}
            selectedRecipe={selectedRecipe}
            onClose={() => {
              setSelectedRecipe(null);
            }}
          />
        </MenuContext.Provider>
      )}
    </div>
  );
};
