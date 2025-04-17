let recipeColumn; // Define this as a global variable

// This function is responsible for adding a new recipe
function addNewRecipeInput() {
    // Make sure recipeColumn is set properly
    recipeColumn = document.getElementById("recipeColumn");
    const recipesContainer = document.getElementById("recipesContainer");

    // Hide the recipes container while adding a new recipe
    recipesContainer.style.display = "none"; // Hide recipes container temporarily

    // Clear the recipe column to prepare for the new recipe form
    recipeColumn.innerHTML = "";

    const newRecipeDiv = document.createElement("div");
    newRecipeDiv.className = "new-recipe";

    const recipeNameInput = document.createElement("input");
    recipeNameInput.type = "text";
    recipeNameInput.placeholder = "Recipe Name";
    recipeNameInput.className = "recipe-name";
    newRecipeDiv.appendChild(recipeNameInput);

    const recipeIngredientsInput = document.createElement("input");
    recipeIngredientsInput.type = "text";
    recipeIngredientsInput.placeholder = "Ingredients (comma separated)";
    recipeIngredientsInput.className = "recipe-ingredients";
    newRecipeDiv.appendChild(recipeIngredientsInput);

    const recipeInstructionsInput = document.createElement("textarea");
    recipeInstructionsInput.placeholder = "Instructions";
    recipeInstructionsInput.className = "recipe-instructions";
    newRecipeDiv.appendChild(recipeInstructionsInput);

    const addRecipeButton = document.createElement("button");
    addRecipeButton.innerText = "Add Recipe";
    addRecipeButton.className = "add-recipe-button";

    // On click, the new recipe is added to the recipeSystem and the page is re-rendered
    addRecipeButton.onclick = () => {
        const name = recipeNameInput.value.trim();
        const ingredientsText = recipeIngredientsInput.value.trim();
        const instructions = recipeInstructionsInput.value.trim();

        const ingredientNames = ingredientsText.split(",").map(name => name.trim());

        const ingredientObjects = ingredientNames.map(name => {
            const found = recipeSystem.ingredients.find(i => i.name.toLowerCase() === name.toLowerCase());
            if (!found) {
                alert(`Ingredient "${name}" does not exist.`);
                throw new Error(`Ingredient "${name}" not found.`);
            }
            return {
                ingredient: found,
                quantity: 1,  // default value
                unit: "pc"    // default unit
            };
        });

        const newRecipe = new Recipe(name, ingredientObjects, instructions);

        // Add the new recipe to the recipeSystem object
        recipeSystem.recipes.push(newRecipe); // Add the new recipe to the recipes array

        // Clear the recipe form section
        recipeColumn.innerHTML = "";

        // Re-render the updated recipe list (including the new one)
        recipeSystem.writeAllRecipesToPage();

        // Show the recipes container again after the new recipe is added
        recipesContainer.style.display = "block";  // Show the recipes container again
    };

    newRecipeDiv.appendChild(addRecipeButton);
    recipeColumn.appendChild(newRecipeDiv);  // Add the form to the column
}
