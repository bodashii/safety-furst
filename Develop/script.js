const generateBtn = document.querySelector('#generate');

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  const passLength = getLength();
  const passPref = getPref();
  const passArray = getPrefArray();

  for(i=0; i < passLength; i++) {
    
  }
}

function getLength() {
  const passwordLength = Number(window.prompt("Choose how many characters for your password? (8-128)", "12"));
  if( passwordLength <= 7 || passwordLength >= 129) {
    window.alert("Please choose a number between 8 and 128");
    return
  }
  return passwordLength;
}

function getPref() {
  
  const pref = {
    pickLower: "",
    pickUpper: "",
    pickNumber: "",
    pickSymbol: ""
  }

  pref.pickLower = window.confirm("Include lowercase characters?");

  pref.pickUpper = window.confirm("Include uppercase characters?");

  pref.pickNumber = window.confirm("Include numbers?");

  pref.pickSymbol = window.confirm("Include Symbols");
  
  return pref;
}

// function getPrefArray() {
//   const prefArray = [];

//   const lower = arrayCharacters(97, 122);
//   const upper = arrayCharacters(65, 90);
//   const number = arrayCharacters(48, 57);
//   const symbol = arrayCharacters(33, 47).concat(
//        arrayCharacters(58, 64).concat(
//          arrayCharacters(91, 96).concat(
//            arrayCharacters(123, 126))))

//   switch(true) {
//     case pickLower:
//       prefArray.map(lower);
    
//     case pickUpper:
//       prefArray.map(upper);
    
//     case pickNumber:
//       prefArray.map(number);

//     case pickSymbol:
//       prefArray.map(symbol);

//     default:
//       window.alert('Please choose at least one preference.');
//   }
//   return prefArray
// }

// function arrayCharacters(high, low) {
//   let array = []
//   for(i = low; i <= high; i++){
//     return array
//   }
// }



// const useNumber = numbers(48, 57);
  // const useSymbol = arrayCharacters


// this will generate a random password based on user input

// grab user input

// pass user input to validate password preferences

// pass password preferences to write password to choose which criteria

// makes arrays for user choices

// pass pick variables and if picked return use arrays in new passPref array

// map through passPref array randomly for length of password






// Add event listener to generate button
generateBtn.addEventListener("click", console.log('hey'));
