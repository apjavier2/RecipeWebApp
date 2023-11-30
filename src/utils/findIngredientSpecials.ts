export const findIngredientsSpecials = (
  specials: any,
  ingredientId: string
) => {
  return specials.filter(
    (special: any) => special.ingredientId === ingredientId
  );
};
