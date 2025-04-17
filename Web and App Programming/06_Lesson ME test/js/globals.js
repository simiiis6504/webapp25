const recipesContainer = document.getElementById("recipesContainer"); //get the recipes container

const ingredientsContainer = document.getElementById("ingredientsContainer");

const recipeSystem = {
    systemState: "viewingRecipes",
    currentRecipe: null,
    currentIngredient: null,
    recipes: [],
    ingredients: [],

    writeAllIngredientsToPage: function() {
        this.ingredients.forEach(
          (ingredient) => ingredient.writeIngredientToPage() //we are looping through each ingredient in the recipeSystem and calling the method of the ingredient objects in order to write them to the page
        );
    },

    writeAllRecipesToPage: function() {
        // Loop through the recipes and call writeRecipe for each one
        this.recipes.forEach(recipe => {
          recipe.writeRecipe();  // Call the writeRecipe method of each recipe
      });
    }
}

//INDEPENDENT TASK:
//Write all recipes to the page when the DOM is loaded