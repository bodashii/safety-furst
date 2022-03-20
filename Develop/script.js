// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// takes checked password criteria and uses arrayCharacters to display password
// function generatePassword() {
//   var characters = checked();
//   const passwordLength = "";

// }
console.log("hi");
passwordLength = 8;
for (i = 0; i < passwordLength; i++){
  let sam = Math.floor(65);
  console.log(sam);
}

// const lower = 97;
// const lowerChar = [];

// function mapLower() {
  
//   for(i = 97; i <= 122; i++){
//     String.fromCharCode(i);
//     lowerChar.push(i)
//   }
//   return lowerChar;
// }

let char = String.fromCharCode(100, 99, 111, 100, 101);

console.log(char);

// defines arrays to hold characters
const lowerArray = [];
const upperArray = [];
const numberArray = [];
const symbolArray = [];

// defines
lower = lowerCharacters(97, 122)
upper = upperCharacters(65, 90)
number = numbers(48, 57)
symbol = symbols(33, 47).concat(
  symbols(58, 64).concat(
  symbols(91, 96).concat(
  symbols(123, 126)
  ))
)

// iterates over object and maps to array
function lowerCharacters(low, high) {
  for(i = low; i <= high; i++){
    lowerArray.push(String.fromCharCode(i))
  }
  return lowerArray;
}

function upperCharacters(low, high) {
  for(i = low; i <= high; i++){
    upperArray.push(String.fromCharCode(i))
  }
  return upperArray;
}

function numbers(low, high) {
  for(i = low; i <= high; i++){
    numberArray.push(String.fromCharCode(i))
  }
  return numberArray;
}

function symbols(low, high) {
  for(i = low; i <= high; i++){
    symbolArray.push(String.fromCharCode(i))
  }
  return symbolArray;
}

// display array of characters lower upper number symbol
console.log(lower);
console.log(upper);
console.log(number);
console.log(symbol);
// console.log(lowerChar);

// Makes array for each character type
// uppercase array
// const uppercaseChar = arrayCharacters(65, 90);
// lowercase array
// number array
// symbols array

// puts specified characters into an array
// function arrayCharacters(low, high) {
  // let array = []
//   for (let i = low; i <= high; i++){
//     String.fromCharCode(i);
//     array.push(i);
//   }
//   return array;
// }

// console.log(uppercaseChar);
// checks values of passwordPreferences modal
// function checked() {
  // password criteria
  // const useUpperCase
  // const useLowerCase
  // const useNumbers
  // const useSymbols

  // empty array for chosen criteria
  // const passPref = [];
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
