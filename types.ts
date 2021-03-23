export interface Recipe {
  url: string,
  ingredients?: string[],
  parsedIngredients?: Ingredient
}

export interface Ingredient {
  quantity: number,
  unit: string,
  ingredient: string,
  minQty: number,
  maxQty: number
}