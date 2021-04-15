import { useState } from "react";
import styles from "../styles/components/RecipeSearch.module.css";
import { Recipe } from "../types";
import { RiScissors2Fill } from "react-icons/ri";
import IngredientList from "../components/IngredientList";

const RecipeSearch = () => {
  const [recipe, setRecipe] = useState<any>({
    url: "https://www.allrecipes.com/recipe/22180/waffles-i/",
  });

  const getRecipe = async (event) => {
    event.preventDefault();
    const fetchOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        url: event.target.url.value,
      }),
    };
    const recipeData = await fetch("/api/get-recipe/", fetchOptions).then(
      (response) => {
        response.json().then((recipeJson) => {
          setRecipe({ ...recipe, ingredients: recipeJson });
        });
      }
    );
  };

  return (
    <figure className={styles.container}>
      <form onSubmit={getRecipe} className={styles.form}>
        <label htmlFor="url">Recipe URL</label>
        <input
          type="text"
          className={styles.search}
          id="url"
          name="url"
          defaultValue={recipe.url}
          onChange={(event) =>
            setRecipe({ ...recipe, url: event.target.value })
          }
        />
        <button type="submit" className={styles.button}>
          <RiScissors2Fill /> Clip Recipe
        </button>
      </form>
      {recipe.ingredients ? (
        <IngredientList
          title="Clipped Ingredients"
          ingredients={recipe.ingredients}
        />
      ) : (
        ""
      )}
    </figure>
  );
};

export default RecipeSearch;
