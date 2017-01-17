import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{currentUser}}'s Recipe Box</h1>
    <h3>{{currentFocus}}</h3>
    <div class="well" *ngFor="let currentRecipe of recipes">
      <h3>{{currentRecipe.title}}</h3>
      <h5>{{currentRecipe.description}}</h5>
      <h5>Ingredients:</h5>
      <ul>
        <li *ngFor="let ingredients of currentRecipe.ingredients">{{ingredients}}</li>
      </ul>
      <h5>Directions:</h5>
      <p>{{currentRecipe.directions}}</p>
    </div>
  </div>
  `
})

export class AppComponent {
  currentUser: string = 'Erica';
  recipes: Recipe[] = [
    new Recipe('French Dip', 'Delicious roast beef sandwich on a homemade hogi roll', ['1lb roast beef', '2 cups flour', '1 yellow onion', '1/2 cup sliced mushrooms'], "To begin, place roast beef and diced yellow onion in a crock pot. Add beef stock."),
    new Recipe('Turtle Nut Cake', 'Decadent chocolate, caramel, and pecan cake with rich dark chocolate icing', ['1 box of German Cake mix', '1 cup chocolate chips', '1 bag of caramels', '4 tbs cocoa', '1/2 cup pecans'], "Follow direction on back of cake mix box to begin."),
    new Recipe('White Bean Chicken Chili', 'Tasty chicken chile made with green salsa and white beans', ['1lb diced chicekn', '1/2 cup dry white beans', '1 tsp corriander', '1 cup salsa verde'], "Place all ingredients in crock pot. Set timer to 3 hours and cook mode to high.")
  ];
}

export class Recipe {
  public tested: boolean = false;
  constructor(public title: string, public description: string, public ingredients: string[], public directions: string) { }
}
