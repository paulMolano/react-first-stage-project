import React from "react";
import { CocktailForm } from "../components/CocktailForm";
import { RecipesList } from "../components/RecipesList";
import WithLayout from "../hoc/withLayout";

const Main = () => {
  return (
    <WithLayout>
      <div className="container mt-5">
        <div className="row">
          <CocktailForm />
        </div>
        <RecipesList />
      </div>
    </WithLayout>
  );
};

export default Main;
