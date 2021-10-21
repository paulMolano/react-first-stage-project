import React, { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { DrinksContext } from "../context/DrinksContext";

export const CocktailForm = () => {
  const { category } = useContext(CategoryContext);
  const { addDrink, setConsult } = useContext(DrinksContext);

  const [search, setSearch] = useState({
    ingredient: "",
    category: "",
  });

  //Read form content
  const handleContent = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  //Save form content
  const handleSubmit = (e) => {
    e.preventDefault();
    addDrink(search);
    setConsult(true);
    setSearch({
      ingredient: "",
      category: "",
    });
  };

  return (
    <form className="col-md-12" onSubmit={handleSubmit}>
      <fieldset className="text-center">
        <legend>Search Drinks by Category and Ingredient</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="ingredient"
            className="form-control"
            type="text"
            placeholder="Search by ingredient"
            onChange={handleContent}
            value={search.ingredient}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={handleContent}
            value={search.category}
            required
          >
            <option value="">Select category</option>
            {category.map((cat) => (
              <option key={cat.strCategory} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            className="btn btn-block btn-primary "
            type="submit"
            value="Search cocktails"
          />
        </div>
      </div>
    </form>
  );
};
