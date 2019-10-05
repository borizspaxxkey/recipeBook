import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.Szj9tHvUp6n6PQH0scD7TgHaE7&pid=Api&rs=1&c=1&qlt=95&w=172&h=114',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.jCBsGtsGNCG8Ng11KyiZDAHaF7&pid=Api&rs=1&c=1&qlt=95&w=133&h=106',
      ingredients: ['Spaghetti', 'Meat']
    }
  ]

  constructor() { }

  public getAllRecipies() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}
