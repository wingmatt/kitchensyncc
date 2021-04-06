export interface Recipe {
  url: string,
  ingredients?: string[],
  parsedIngredients?: Ingredient
}

export interface Ingredient {
  quantity: string,
  unit: string,
  ingredient: string,
  minQty: string,
  maxQty: string
}