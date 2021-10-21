import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [idrecipe, setIdrecipe] = useState(null);
  const [newrecipe, setNewrecipe] = useState({});

  useEffect(() => {
    const obtainRecipe = async () => {
      if (!idrecipe) return;

      const URL_RECIPE = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
      const recipe = await axios.get(URL_RECIPE);
      setNewrecipe(recipe.data.drinks[0]);
    };
    obtainRecipe();
  }, [idrecipe]);

  return (
    <ModalContext.Provider value={{ setIdrecipe, newrecipe, setNewrecipe }}>
      {children}
    </ModalContext.Provider>
  );
};
