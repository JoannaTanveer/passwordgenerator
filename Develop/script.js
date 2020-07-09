
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var charValue = prompt("How many characters long would you like your password to be?");
  //Verification to see if user has input a number between 8-128//
  if(charValue<8 || charValue>128) {
    return writePassword();
  }
  // Questions to request specifications from user//
  var number = confirm('Would you like to include numbers?');
  var specChar = confirm('Would you like to include special characters?');
  var lowerCase = confirm('Would you like to include lower case a-z?');
  var upperCase = confirm('Would you like to include upper case A-Z?');

  //Arrays of character sets
  var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  var specCharArray =  ['!', '"','#', '$', '%', '&', '(',')','*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
  
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
  //Empty array to push into//
  var collectionArray=[];
  
  //Empty array to put randomized data from collectionArray//
  var passwordArray=[]
  
  //Conditionals that recognize user input//
  if (number){
    collectionArray.push(...numberArray);
   
  }
  if (specChar){
    collectionArray.push(...specCharArray);
   
  }
  if (lowerCase){
    collectionArray.push(...lowerCaseArray);
   
  }
  if (upperCase){
    collectionArray.push(...upperCaseArray);
    }
// Loop to randomize the parts of the collectionArray to a length chosen by the user//
  for (var i = 0; i < charValue; i++) {
  passwordArray.push(collectionArray[Math.floor(Math.random()*collectionArray.length)]);
  console.log(passwordArray);
  }
  //Attach array to HTML element #password and return value of passwordArray with no ',' or spaces//
  const passwordBox= document.getElementById('password');
  passwordBox.value=passwordArray.join(' ').replace(/ /g, "");
}

//Event listener, on click of button user signals to call function writePassword//
generateBtn.addEventListener("click", writePassword);
