function addNewRecipeInputs(){
    
    recipeColumn.innerHTML = '<h2>ADD NEW RECIPE</h2>'; //clear the recipe column

    const recipeNameInput = document.createElement('input'); //create a new input element for the recipe name
    recipeNameInput.type = 'text'; //set the type to text
    recipeNameInput.placeholder = 'Type the recipe Name'; //set the placeholder to Recipe Name
    recipeNameInput.id = 'recipeNameInput'; //set the id to recipeName
    recipeNameInput.addEventListener('input', function() {console.log(this.value)}) //add an event listener to the input to update the recipe name in the recipeSystem object

    recipeColumn.appendChild(recipeNameInput); //append the input to the recipe column

    const ingredientDropArea = document.createElement('div'); //create a new div element for the ingredient drop area
    ingredientDropArea.id='ingredientDropArea'; //set the id to ingredientDropArea
    ingredientDropArea.style.border = '1px dashed black'; //set the border to 1px solid black

    recipeColumn.appendChild(ingredientDropArea); //append the div to the recipe column
}