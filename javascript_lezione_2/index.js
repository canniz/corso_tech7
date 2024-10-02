/* 
  let numberOne;

  numberOne = 2;

  const numberTwo = 10;

  const username = "cicciogamer";

  const shoppingList = ["latte", "uova", "pane"];

  const isWeatherGoodToday = true;

  const person = {
    firstName: "samir",
    lastName: "vimercati"
  }

  if(isWeatherGoodToday === true) {
    console.log("oggi il tempo non è male")
  }

  for (let index = 0; index < 10; index++) {
    console.log(index);
  }

  let index = 0;

  while (index < 10) {
    index++;
  }

  const shoppingList = ["latte", "uova", "pane"];

  shoppingList[0] ---> "latte"

  for (let index = 0; index < shoppingList.length; index++) {
    console.log(shoppingList[index]);
  }

  shoppingList.push("cioccolato") ---> ["latte", "uova", "pane", "cioccolato"];
*/

/* const elementH1Id = document.getElementById("title");
const elementH1Class = document.getElementsByClassName("title"); */

/* const elementH1Id = document.querySelector("#title");
const elementH1Class = document.querySelector(".title");

console.log(elementH1Id);
console.log(elementH1Class); */

/* const elementH1 = document.querySelector("#title");

console.log(elementH1.getBoundingClientRect()); */

/* const elementButtonMenu = document.querySelector("#button-menu");
const elementSidebar = document.querySelector("#sidebar");
const elementButtonCloseMenu = document.querySelector("#button-close-menu");

elementButtonMenu.addEventListener("click", () => {
  // elementSidebar.style.left = 0;
  elementSidebar.classList.add("open");
});

elementButtonCloseMenu.addEventListener("click", () => {
  elementSidebar.classList.remove("open");
}); */
