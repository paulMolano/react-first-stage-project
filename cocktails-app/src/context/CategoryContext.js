import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  //TRY CATCH
  useEffect(() => {
    const getCategory = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const category = await axios.get(url);

      setCategory(category.data.drinks);
    };
    getCategory();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        category,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
