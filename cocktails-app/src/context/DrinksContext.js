import { createContext, useReducer, useState, useEffect } from "react";

import axios from "axios";
import drinksReducer from "./drinksReducer";
export const DrinksContext = createContext();

const initialState = {
  drinkOption: {},
  consult: false,
};

export const DrinksProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const [drink, dispatch] = useReducer(drinksReducer, initialState);

  const addDrink = (drink) =>
    dispatch({
      type: "SAVE_DRINK",
      payload: drink,
    });
  const setConsult = (boolean) =>
    dispatch({
      type: "CONSULT_DRINK",
      payload: boolean,
    });

  useEffect(() => {
    if (drink.consult) {
      const axiosRecipes = async () => {
        const { ingredient, category } = drink.drinkOption;
        const RECIPE_URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}&i=${ingredient}`;
        const recipe = await axios.get(RECIPE_URL);
        setRecipes(recipe.data.drinks);
        setConsult(false);
        // console.log(recipe.data.drinks);
      };
      axiosRecipes();
    }
  }, [drink]);

  return (
    <DrinksContext.Provider value={{ drink, addDrink, setConsult, recipes }}>
      {children}
    </DrinksContext.Provider>
  );
};
