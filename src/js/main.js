
import { Recipe } from './modules/Recipe.js';
import { CustomRecipe } from './modules/CustomRecipe.js';


const borscht = new Recipe(
    "Borscht",
    "A sour soup made with meat stock, vegetables and seasonings",
    ["Beetroot", "Carrot", "Onion", "Cabbage", "Potato"]
);

const customPizza = new CustomRecipe(
    "Homemade Pizza",
    "A classic Italian dish with your favorite toppings",
    ["Flour", "Yeast", "Tomato Sauce", "Cheese", "Pepperoni"],
    45
);

const customPasta = new CustomRecipe(
    "Pasta Alfredo", 
    "A creamy pasta dish with a rich cheese sauce",
    ["Pasta", "Heavy Cream", "Parmesan Cheese", "Butter", "Garlic"],
    30
);

const defaultRecipes = [borscht];
const customRecipes = [customPizza, customPasta];

const customSoup = new CustomRecipe(
  "Bulgarian Soup",
  "A warm and hearty soup",
  ["Broth", "Vegetables", "Noodles"],
  25
);
customRecipes.push(customSoup);

function renderRecipes() {
    const defaultRecipeContainer = document.querySelector('.recipe');
    const customRecipeContainer = document.querySelector('.custom .recipe');


    defaultRecipes.forEach(recipe => {
        defaultRecipeContainer.innerHTML += recipe.displayRecipe();
    });

    customRecipes.forEach(recipe => {
        customRecipeContainer.innerHTML += recipe.displayRecipe();
    });
}

renderRecipes();