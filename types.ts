export interface Recipe {
  url: string,
  ingredients: string[]
}

export interface Ingredient {
  quantity: number,
  unit: string,
  ingredient: string,
  minQty: number,
  maxQty: number
}