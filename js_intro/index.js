// year = 2025;
/*
  Commento a più righe
  Commento a più righe
*/

// alert(year);

/* let result = 0;
const a = 10;
const b = 20;

result = a + b;

const messageOne = "Hello";
const messageTwo = "World";
const message = messageOne + " " + messageTwo;

const valueFalse = false;
const valueTrue = true;
const valueNumberFalse = 0;
const valueNumberTrue = 1;

const classRoom = [
  "Samir",
  "Matteo",
  "Gianni",
  "Alessio",
  "Bryan",
  "David",
  "Daniele",
  "Salvatore",
  "Giulia",
];
const classRoomAge = [23, 18, 18, 18];

const person = {
  firstName: "Samir",
  lastName: "Vimercati",
};

const classRoomObj = {
  samir: {
    firstName: "Samir",
    lastName: "Vimercati",
  },
};
*/

const a = 10;
const b = 20;

const sum = a + b;
const subtract = a - b;
const division = a / b;
const multiplication = a * b;
const powerOf = 10 ** 2;
const remainder = 10 % 2;

if (sum > 50) {
  console.log("La somma è maggiore di 10");
}

if (sum < 50) {
  console.log("La somma è minore di 50");
}

if (10 == 10) {
  console.log("Il valore è uguale");
}

if (false == 0) {
  console.log("è FALSE");
}

if (false === 0) {
  console.log("HELLO WORLD");
}

if (10 != 20) {
  console.log("10 è diverso da 20");
}

if (10 !== 20) {
  console.log("10 è diverso da 20");
}

const weather = "sunny";

if (weather === "sunny") {
  console.log("Il tempo oggi è bello");
} else if (weather === "rain") {
  console.log("Il tempo oggi è brutto");
} else {
  console.log("Il tempo è normale");
}

const x = 10;

if (x > 5 && x < 20) {
  console.log("Condizione AND");
}

if (x > 5 || x < 8) {
  console.log("Condizione OR");
}

/* for (let index = 0; index < 10; index++) {
  console.log(index);
} 

let j = 0;

while (j < 10) {
  console.log(j);

  j++;
}
*/

const classRoom = [
  "Samir",
  "Matteo",
  "Gianni",
  "Alessio",
  "Bryan",
  "David",
  "Daniele",
  "Salvatore",
  "Giulia",
];

/* classRoom.forEach((person) => {
  console.log(person);
}); */

for (let i = 0; i < classRoom.length - 1; i++) {
  console.log(classRoom[i]);
}
