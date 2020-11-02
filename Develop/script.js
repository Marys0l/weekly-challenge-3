function generatePassword() {
  
  var passwordCharacters = [];
  //use only these special characters 
  var usespecial = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumbers = false;
  var includeSpecial = false;
  var passwordLength = false;
  while (!Number.isInteger(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    
  passwordLength = prompt("MUST type digit between 8 and 128!");
  passwordLength = (passwordLength === null) ? null : Number(passwordLength);
  }
  console.log(passwordLength);
  
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    includeLowercase = confirm("Would you like your password to contatain lowercase letters");
    includeUppercase = confirm("Would you like your password to contatain uppercase characters?");
    includeNumbers = confirm("Would you like your password to contatain numbers?");
    includeSpecial = confirm("Would you like your password to contatain special characters?");
  }
  //lowercase letters are codes 97-122
  if (includeLowercase) {
    for (var i = 97; i <= 122; i++) {
      passwordCharacters.push(String.fromCharCode(i));
    }
  }

  //uppercase letters are codes 65-90
  if (includeUppercase) {
    for (var i = 65; i <= 90; i++) {
      passwordCharacters.push(String.fromCharCode(i));
    }
  }
  //use digits 1-9
  if (includeNumbers) {
    for (var i = 0; i <= 9; i++) {
      passwordCharacters.push(i.toString());
    }
  }
  if (includeSpecial) {
    var specialArray = usespecial.split("");
    passwordCharacters = passwordCharacters.concat(specialArray);
  }
  console.log(passwordCharacters);
  var finalpassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    // random generation of password
    finalpassword += passwordCharacters[randomIndex];
  }
  // password will populate in Your Secure Password box
  return finalpassword;
}
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
