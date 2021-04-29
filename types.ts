export interface Recipe {
  url: string,
  name: string,
  ingredients?: Ingredient[],
  status?: Status["code"],
}
export interface Ingredient {
  quantity: string,
  unit: string,
  ingredient: string,
  minQty?: string,
  maxQty?: string,
  expires?: string,
  status?: Status["code"],
}

export interface Status {
  code: 'ok' | 'warning' | 'critical',
  label: string
}

export interface ListCategory {
  title: string,
  ingredients?: Ingredient[],
  position: number
}

export interface FloatingButton {
  action: 'editShoppingList' | 'updateShoppingList',
  label: string,
  color: string,
  icon: string
}