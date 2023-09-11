(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

const addFruit = fruit => {
    const li = document.createElement("li")
    li.textContent = fruit.name
    fruitList.appendChild(li)   
    totalCal = totalCal + fruit.nutritions.calories
    li.addEventListener("click", ()=>{
        fruitList.removeChild(li)
    })
     fruitNutrition.textContent = (`Total Calories: ${fruit.nutritions.calories}`)

    fruitList.appendChild(li)   
    totalCarbs = totalCarbs + fruit.nutritions.carbohydrates
    fruitNutrition.textContent[1] = (`Total Carbohydrates: ${fruit.nutritions.carbohydrates}`)
}

fruitForm.addEventListener("submit", e=> {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
});


},{}]},{},[1]);
