import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { LIFECYCLE_WILL_ENTER } from '@ionic/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipies();
  }

}
