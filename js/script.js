const fruitForm =document.querySelector('#inputSection form');

const fruitList =document.querySelector("#fruitSection ul");

const fruitNutrition = document.querySelector("#nutritionSection p");

const fetchFruitData = fruit =>{
    fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        addFruit(data)
    })
    .catch(e => console.error(e))
}

let totalCal = 0;
let totalCarbs =0;
let totalFat =0;
let totalProtein =0;
let totalSugar =0;

const addFruit = fruit => {
    const li = document.createElement("li")
    li.textContent = fruit.name
    fruitList.appendChild(li)   
    totalCal = totalCal + fruit.nutritions.calories
    totalCarbs = totalCarbs + fruit.nutritions.carbohydrates
    totalFat = totalFat + fruit.nutritions.fat
    totalProtein = totalProtein + fruit.nutritions.protein
    totalSugar = totalSugar + fruit.nutritions.sugar
    li.addEventListener("click", ()=>{
        fruitList.removeChild(li)
    })
     fruitNutrition.textContent = (`Total Calories: ${totalCal}
     Total Carbohydrates: ${totalCarbs}
     Total Fat: ${totalFat}
     Total Protein: ${totalProtein}
     Total Sugar: ${totalSugar}`);
}

fruitForm.addEventListener("submit", e=> {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
});

