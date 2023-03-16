const SPECIAL_CHARACTERS = ["&", "#", "$", "!", "?", '"', "(", ")", "."];

const ALPHABETIC_CHARACTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let password_list = [];
let password = "";

console.log("Welcome to the My Password Generator!");
let num_letters = parseInt(
  prompt("How many letters would you like in your password?")
);
let num_symbols = parseInt(prompt("How many symbols would you like?"));
let num_numbers = parseInt(prompt("How many numbers would you like?"));

for (let i = 1; i <= num_letters; i++) {
  password_list.push(
    ALPHABETIC_CHARACTERS[
      Math.floor(Math.random() * ALPHABETIC_CHARACTERS.length)
    ]
  );
}

// loop through the SPECIAL_CHARACTERS array here

// loop through the NUMBERS array here

// sort the array here

// loop throught the password_list here

alert(`Your password is ${password}`);
