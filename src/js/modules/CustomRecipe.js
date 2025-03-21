// js/modules/CustomRecipe.js
import { Recipe } from './Recipe.js';

export class CustomRecipe extends Recipe {
    constructor(name, description, ingredients, cookingTime) {
        super(name, description, ingredients);
        this.cookingTime = cookingTime;
    }

    displayRecipe() {
        return `
            <h3 class="recipe-heading">${this.name}</h3>
            <p class="description">${this.description}</p>
            <ul>${this.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
            <p class="cooking-time">Cooking Time: ${this.cookingTime} minutes</p>
        `;
    }
}