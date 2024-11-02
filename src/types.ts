export type User = {
  id: number;
  name: string;
  email: string;
  token: string;
};

export type Ingredient = {
  ID: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  name: string;
  recipes: null;
};

export interface Recipe {
  ID: number;
  title: string;
  instructions: string;
  ingredients: Ingredient[];
  image: string;
}
