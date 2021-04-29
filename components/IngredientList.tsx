import { Ingredient } from "../types";

export default function IngredientList(props: {
  title: string;
  ingredients?: Ingredient[];
}) {
  return (
    <>
      <h3>{props.title}</h3>
      <ul>
        {props.ingredients.map((value: Ingredient, index) => {
          return (
            <li key={index}>
              <strong>
                {value.quantity} {value.unit}
              </strong>{" "}
              {value.ingredient}
            </li>
          );
        })}
      </ul>
    </>
  );
}
