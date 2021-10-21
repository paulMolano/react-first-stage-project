import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import modalReducer from "./modalReducer";

export const ModalContext = createContext();

const initialState = {
  idrecipe: null,
  newrecipe: {},
};

export const ModalProvider = ({ children }) => {
  const [recipes, dispatch] = useReducer(modalReducer, initialState);

  const setIdrecipe = (id) =>
    dispatch({
      type: "SAVE_IDRECIPE",
      payload: id,
    });

  const setNewrecipe = (recipe) =>
    dispatch({
      type: "SAVE_RECIPE",
      payload: recipe,
    });
  const { idrecipe, newrecipe } = recipes;

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
