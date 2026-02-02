/*
Create an array to hold recipe objects. Each recipe object should have the following properties:
- name (string): The name of the recipe.
- ingredients (array of strings): A list of ingredients required for the recipe.
- cookingTime (number): The time in minutes required to cook the recipe.
- totalIngredients (number): The total number of ingredients in the recipe (to be calculated).
- difficultyLevel (string): The difficulty level of the recipe based on cooking time (to be determined).

Tasks:
1. Create at least three recipe objects with different names, ingredients, and cooking times.
2. Write a function getTotalIngredients that takes an array of ingredients and returns the total number of ingredients.
3. Write a function getDifficultyLevel that takes cooking time as input and returns "easy" if cooking time is less than or equal to 30 minutes, "medium" if it's between 31 and 60 minutes, and "hard" if it's more than 60 minutes.
*/

const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);