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
const array = ["u", "l", "t", "i", "m", "a", "t", "e", "p", "a", "s", "s", "w"
, "o", "r", "d"];
passwordLength = 8;
for (i = 0; i < passwordLength; i++){
  console.log(array);
}
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
