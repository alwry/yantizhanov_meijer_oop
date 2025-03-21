export class Recipe {
  constructor(name, description, ingredients) {
      this.name = name;
      this.description = description;
      this.ingredients = ingredients;
  }

  displayRecipe() {
      return `
          <h3 class="recipe-heading">${this.name}</h3>
          <p class="description">${this.description}</p>
          <ul>${this.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
      `;
  }
}