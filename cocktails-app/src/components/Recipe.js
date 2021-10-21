import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const Recipe = ({ recipe }) => {
  const { setIdrecipe, newrecipe, setNewrecipe } = useContext(ModalContext);

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const showIngredients = (newrecipe) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (newrecipe[`strIngredient${i}`] != null) {
        ingredients.push(
          <li key={`strIngredient${i}`}>
            {newrecipe[`strIngredient${i}`]} {newrecipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h6 className="card-header">{recipe.strDrink}</h6>
        <img
          className="card-img-top"
          src={recipe.strDrinkThumb}
          alt={recipe.strDrink}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setIdrecipe(recipe.idDrink);
              handleOpen();
            }}
          >
            See Recipe
          </button>
          <Modal
            open={open}
            onClose={() => {
              setIdrecipe(null);
              setNewrecipe({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{newrecipe.strDrink}</h2>
              <h3 className="mt-4">Instructions</h3>
              <p>{newrecipe.strInstructions}</p>
              <img
                className="img-fluid my-4"
                src={newrecipe.strDrinkThumb}
                alt={newrecipe.strDrink}
              />
              <h3>Ingredients</h3>
              <ul>{showIngredients(newrecipe)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
