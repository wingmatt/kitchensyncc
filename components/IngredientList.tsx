import { Ingredient } from "../types";

export default function IngredientList(props: {
  title: string;
  ingredients?: Ingredient[];
}) {
  return (
    <section>
      <h2>{props.title}</h2>
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
    </section>
  );
}
