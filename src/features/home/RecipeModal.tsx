import React from "react";
import Modal from "react-modal";
import { MenuItem } from "./components/MenuItem";
import { Ingredients } from "./components/Ingredients";
import { Directions } from "./components/Directions";

interface RecipeModal {
  isOpen: boolean;
  onClose: () => void;
  selectedRecipe: any;
}

export const RecipeModal: React.FC<RecipeModal> = ({
  isOpen,
  onClose,
  selectedRecipe,
}) => {
  const modalStyles = {
    content: {
      width: "70%",
      margin: "auto",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      style={modalStyles}
      onRequestClose={onClose}
      appElement={document.getElementById("__next") ?? undefined}
    >
      <div className="flex flex-col items-end h-[20rem]">
        <button onClick={onClose} className="font-bold text-[1.25rem]">
          X
        </button>
        <MenuItem
          key={selectedRecipe.uuid}
          title={selectedRecipe.title}
          images={selectedRecipe.images}
          description={selectedRecipe.description}
          prepTime={selectedRecipe.prepTime}
          servings={selectedRecipe.servings}
          cookTime={selectedRecipe.cookTime}
        />

        <div className="w-full flex flex-col sm:flex-row mt-4 gap-4">
          <Ingredients ingredients={selectedRecipe.ingredients} />
          <Directions directions={selectedRecipe.directions} />
        </div>
        <div className="flex italic mt-10">
          <div className="pr-4">
            <span className="font-semibold">Post Date: </span>
            {selectedRecipe.postDate}
          </div>
          <div>
            <span className="font-semibold">Edit Date: </span>
            {selectedRecipe.editDate}
          </div>
        </div>
      </div>
    </Modal>
  );
};
