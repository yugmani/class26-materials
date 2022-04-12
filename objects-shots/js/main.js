//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
//   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

let URL = "";

const btnEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const imgEl = document.querySelector("img");

btnEl.addEventListener("click", () => {
  const value = inputEl.value.trim();
  URL = url + value;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("h2").innerText = data.drinks[0].strDrink;
      imgEl.src = data.drinks[0].strDrinkThumb;
      document.querySelector("h3").innerText = data.drinks[0].strInstructions;
      inputEl.value = "";
    })
    .catch((err) => console.log(err));
});
