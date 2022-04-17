const generateBtn = document.querySelector('#generate');
const passForm = {
  lowercase: false,
  uppercase: false,
  numeral: false,
  symbol: false
}

let passwordLength;

function passLength() {
  let passwordLength = window.prompt(
    "Pick a password length, 8 - 128."
  );
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("try again...")
    getLength()
  }
  
}




function generatePassword() {
  passLength();
  passCrit();
  console.log(passwordLength);
  console.log(passForm);
  var password = writePassword();

  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}



function passCrit() {
  passForm.lowercase = window.confirm(
    "Include lowercase?"
  )
  passForm.uppercase = window.confirm(
    "Include uppercase?"
  )
  passForm.number = window.confirm(
    "Include numbers?"
  )
  passForm.symbol = window.confirm(
    "Include symbols?"
  )
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);






















// const generateBtn = document.querySelector('#generate');

// const passCrit = [];

// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// function generatePassword() {
  
//   passPref();
  

// }



// function passPref() {
//   const passwordLength = window.prompt(
//     "Please choose a password length between 8 - 128 characters.")
//   const critArray = {
//     useLowerChar : '',
//     useUpperChar : '',
//     useNumber : '',
//     useSymbol : ''
//   }

//   if (passwordLength < 8 || passwordLength > 128){
//     window.alert("Sorry not a valid entry.")
//   }else{
//     critArray.useLowerChar = window.confirm("Include lowercase?");
//     critArray.useUpperChar = window.confirm("Include uppercase?");
//     critArray.useNumber = window.confirm("Include numbers?");
//     critArray.useSymbol = window.confirm("Include symbols?");
//   }
//   passCrit
//   function passCrit() {
//     if(critArray.useLowerChar && critArray.useUpperChar &&
//       critArray.useNumber && critArray.useSymbol === false) {
//         window.alert("Please pick at least one character type.")
//       }
//       for (let i = 0; i < critArray[i]; i++){
//         console.log(critArray);
//       }
  
//     console.log(passPref);
  
//     if(critArray.useLowerChar === true){
//       randomString.map(char.lower)
//     }
//     if(critArray.useUpperChar === true){
//       randomString.join(map(char.upper))
//     }
//     if(critArray.useNumber === true){å
//     }
//     if(critArray.useSymbol === true){
//       randomString.join(map(char.symbol))
//     }
//     console.log(randomString)

//   }
// }


  

//   let criteria = [];
//   let passCritObject = Object.values(critArray);

//   for (let i = 0; i < char.length; i++){
//     if(passCrit[i]){
//       criteria += char.property[i];
//     }
//   }
//   console.log(passwordLength);
//   console.log(char);
//   console.log(passCrit);
//   console.log(criteria);
//   console.log(randomString);
//   // randomChar();

// const char = {
//   lower : arrayCharacters(97, 122),
//   upper : arrayCharacters(65, 90),
//   number : arrayCharacters(48, 57),
//   symbol : 
//     arrayCharacters(33, 47)
//       .concat(arrayCharacters(58, 64))
//         .concat(arrayCharacters(91,96))
//           .concat(arrayCharacters(123, 126))
// }

// function arrayCharacters(low, high) {
//   let array = []
//   for(let i = low; i <= high; i++){
//     array.push(String.fromCharCode(i));
//   }
//   return array
// }



// // function randomChar() {
// //   randomPassword = "";
// //   console.log("we made it to the random string character generator");
// //   for (let i = 0; i < critChar; i++) {
// //     randomPassword += critChar.charAt(Math.floor(Math.random() * critChar.length))
// //   }
// //   console.log(randomPassword);
// // }

// // Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);

// // asdfkjl.map(element ) => {

// // }