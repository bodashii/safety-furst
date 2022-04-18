const generateBtn = document.querySelector('#generate');
const passForm = {
  length: '',
  lowercase: false,
  uppercase: false,
  numeral: false,
  symbol: false
}

const chars = [
  "abcdefghijklmnopqstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  ` !"#$%&'()*+,-./:;<=>?@[\]^_\u0060{|}~`
];

// splits chars string to iterate over in for loop

const lower = chars[0].split('');
const upper = chars[1].split('');
const num = chars[2].split('');
const sym = chars[3].split('');

const charArray = [lower, upper, num, sym];

// collects password length

function passLength() {
  passForm.length = window.prompt(
    "Pick a password length, 8 - 128.");
  while (
    isNaN(passForm.length) || passForm.length < 8 || passForm.length > 128) {
    passLength();
  }
}

// user picks password criteria
function passCrit() {
  passForm.lowercase = window.confirm(
    "Include lowercase?"
  )
  passForm.uppercase = window.confirm(
    "Include uppercase?"
  )
  passForm.numeral = window.confirm(
    "Include numbers?"
  )
  passForm.symbol = window.confirm(
    "Include symbols?"
  )

  while(
    !passForm.lowercase && !passForm.uppercase && !passForm.numeral &&
      !passForm.symbol
  ) {
    window.alert(
      "Select at least one character type."
    );
    passCrit();
  }
}


// collects user input
function generatePassword() {

  passLength();
  passCrit();
  var password = writePassword();

  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}




// writes the password
function writePassword() {
  passwordCriteria();
  return pass;
}
// verifies user input and adds to new array
function passwordCriteria() {
  crit = [];
  let passCriteria = Object.values(passForm);
  passCriteria.shift();

  // loop passes user input
  for (let i = 0; i < passCriteria.length; i++){
    if (passCriteria[i] === true) {
      crit += charArray[i];
    }
  }
  console.log(crit);
  randomChar();
}
// adds random chars based on user input
function randomChar(){
  pass= '';

  for (let i = 0; i < passForm.length; i++) {
    pass += crit.charAt(Math.floor(Math.random() * crit.length));
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

