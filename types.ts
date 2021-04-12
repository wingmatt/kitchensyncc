export interface Recipe {
  url: string,
  ingredients?: Ingredient[],
  parsedIngredients?: Ingredient
}

export interface Ingredient {
  quantity: string,
  unit: string,
  ingredient: string,
  minQty: string,
  maxQty: string
}