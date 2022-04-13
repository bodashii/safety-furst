const generateBtn = document.querySelector('#generate');

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  let passPref = getPref();

}

function getPref() {
  const pref = {
    pickLower: "",
    pickUpper: "",
    pickNumber: "",
    pickSymbol: ""
  }
  pref.pickLower = window.confirm("Include lowercase characters?");
  console.log(pref.pickLower);

  pref.pickUpper = window.confirm("Include uppercase characters?");
  console.log(pref.pickUpper);

  pref.pickNumber = window.confirm("Include numbers?");
  console.log(pref.pickNumber);

  pref.pickSymbols = window.confirm("Include Symbols");
  console.log(pref.pickSymbols);
}
// this will generate a random password based on user input

// grab user input

// pass user input to validate password preferences

// pass password preferences to write password to choose which criteria

// makes arrays for user choices

// pass pick variables and if picked return use arrays in new passPref array

// map through passPref array randomly for length of password





// get html refs
// declare password variables in global scope


// display password preferences for user input

// 







// Assignment code here


// Get references to the #generate element


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
// for (i = 0; i < passwordLength; i++){
//   let sam = Math.floor(65);
//   console.log(sam);
// }

// const lower = 97;
// const lowerChar = [];

// function mapLower() {
  
//   for(i = 97; i <= 122; i++){
//     String.fromCharCode(i);
//     lowerChar.push(i)
//   }
//   return lowerChar;
// }

// const pickLower = true;
// const pickUpper = true;
// const pickNumber = true;
// const pickSymbol = true;

// function generatePassword() {
//   if(passwordLength <= 7 || passwordLength >= 129) {
//     window.alert('Please choose a number between 8 and 128!');
//     return;
//   } else {
    // open modal for passPref
    
    // accept user input 
    // event handler for criteria capture
    // 
  // }
  // passPref();
// }

// let char = String.fromCharCode(100, 99, 111, 100, 101);
// const passCrit = [];
// console.log(char);

// validate user input
// function check(pickLower, pickUpper, pickNumber, pickSymbol){
//   const passCrit = [];
//   const value = {
//     pickLower: true,
//     pickUpper: true,
//     pickNumber: true,
//     pickSymbol: true
//   }

  // const useLower = arrayCharacters(97, 122);
  // const useUpper = arrayCharacters(65, 90);
  // const useNumber = numbers(48, 57);
  // const useSymbol = arrayCharacters(33, 47).concat(
  //   arrayCharacters(58, 64).concat(
  //     arrayCharacters(91, 96).concat(
  //       arrayCharacters(123, 126)
  //     )
  //   )
  // )
// function passPref() {
//   let passCrit = [];
//   switch(value){
//     case pickLower:
//       value = true,
//       // passCrit.push(useLower);
//       passCrit.concat(passArray(91, 122));
//     case pickUpper:
//       // passCrit.push(useUpper);
//       // console.log(useUpper.array);
//       passCrit.concat(passArray(65, 90));
//     case pickNumber:
//       // passCrit.push(useNumber);
//       passCrit.concat(passArray(48, 57));
//     case pickSymbol:
//       // passCrit.push(useSymbol);
//       passCrit.concat(passArray(33, 47).concat(
//         passArray(58, 64).concat(
//           passArray(91, 96).concat(
//             passArray(123, 126)
//           )
          
//         )
//       ))
//       console.log(passCrit);
//     default:
//       window.alert('Please pick at least one preference.');
//       return
//   }
// }

//   const passArray = (high, low) => {
//     let array = []
//     for (i = low; i <= high; i++){
//       return array
//     }
//   }

//   function arrayCharacters(high, low) {
//     let array = []
//     for(i = low; i <= high; i++){
//       return array
//     }
//   }
// }
  
  // if(pickLower==true){
  //   passCrit.push(useLower);
  // }
  //   // close modal and generate password
  // if(pickUpper==true){
  //   passCrit.push(useUpper);
  // }

  // if(pickNumber == true){
  //   passCrit.push(useNumber);
  // }

  // if(pickSymbol == true){
  //   passCrit.push(useSymbol);
  // }



// // defines arrays to hold characters
// const lowerArray = [];
// const upperArray = [];
// const numberArray = [];
// const symbolArray = [];


// // defines function and parameters storing characters based on type
// lower = lowerCharacters(97, 122)
// upper = upperCharacters(65, 90)
// number = numbers(48, 57)
// symbol = symbols(33, 47).concat(
//   symbols(58, 64).concat(
//   symbols(91, 96).concat(
//   symbols(123, 126)
//   ))
// )

// // iterates over object and maps to array
// function lowerCharacters(low, high) {
//   for(i = low; i <= high; i++){
//     lowerArray.push(String.fromCharCode(i))
//   }
//   return lowerArray;
// }

// function upperCharacters(low, high) {
//   for(i = low; i <= high; i++){
//     upperArray.push(String.fromCharCode(i))
//   }
//   return upperArray;
// }

// function numbers(low, high) {
//   for(i = low; i <= high; i++){
//     numberArray.push(String.fromCharCode(i))
//   }
//   return numberArray;
// }

// function symbols(low, high) {
//   for(i = low; i <= high; i++){
//     symbolArray.push(String.fromCharCode(i))
//   }
//   return symbolArray;
// }
// // display array of characters lower upper number symbol

// console.log(passCrit);
// function passPref(){
//   const char = check();
//   for(i = 0; i <= passwordLength; i++){

//   }
// }


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
