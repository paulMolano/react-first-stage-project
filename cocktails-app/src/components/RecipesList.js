import { useContext } from "react";
import { DrinksContext } from "../context/DrinksContext";
import { Recipe } from "./Recipe";

export const RecipesList = () => {
  const { recipes } = useContext(DrinksContext);

  return (
    <div className="row mt-5">
      {recipes.map((recipe) => (
        <Recipe key={recipe.idDrink} recipe={recipe} />
      ))}
    </div>
  );
};
