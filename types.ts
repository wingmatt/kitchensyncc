export interface Recipe {
  url: string,
  imgUrl: string,
  name: string,
  ingredients?: Ingredient[],
}

export interface Ingredient {
  quantity: string,
  unit: string,
  ingredient: string,
  minQty: string,
  maxQty: string
}