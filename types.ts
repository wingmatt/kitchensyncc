export interface Recipe {
  url: string,
  name: string,
  ingredients?: Ingredient[],
}

export interface Ingredient {
  quantity: string,
  unit: string,
  ingredient: string,
  minQty?: string,
  maxQty?: string,
  expires?: string,
  status?: 'ok' | 'warning' | 'critical',
}

export interface ListCategory {
  title: string,
  ingredients?: Ingredient[],
  position: number
}