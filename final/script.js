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

for (let i = 1; i <= num_symbols; i++) {
  password_list.push(
    SPECIAL_CHARACTERS[Math.floor(Math.random() * SPECIAL_CHARACTERS.length)]
  );
}

for (let i = 1; i <= num_numbers; i++) {
  password_list.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)]);
}

password_list.sort(() => Math.random() - 0.5);
for (let i of password_list) {
  password += i;
}
console.log(`Your password is ${password}`);
