export interface Recipe {
  url: string,
  ingredients: string[] | undefined
}

export interface Ingredient {
  quantity: number,
  unit: string,
  ingredient: string,
  minQty: number,
  maxQty: number
}