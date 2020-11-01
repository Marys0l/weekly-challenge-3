function generatePassword() {
  
  var passwordCharacters = [];
  var specialCharStr = " !@#$%^&* ";
  var includeLowercase = " abcdefeghijklmnopqrstuvwxyz ";
  var includeUppercase = " ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  var includeNumeric = false;
  var includeSpecial = false;
  var passwordLength = prompt("Please type the desired length of your password. Password must be greater than 8 characters and less than 128 characters");
  console.log(passwordLength);
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    includeLowercase = confirm("Would you like your password to contatain lowercase letters");
    includeUppercase = confirm("Would you like your password to contatain uppercase characters?");
    includeNumeric = confirm("Would you like your password to contatain numbers?");
    includeSpecial = confirm("Would you like your password to contatain special characters?");
  }
  if (includeLowercase) {
    for (var i = 97; i <= 122; i++) {
      passwordCharacters.push(String.fromCharCode(i));
    }
  }
  if (includeUppercase) {
    for (var i = 65; i <= 90; i++) {
      passwordCharacters.push(String.fromCharCode(i));
    }
  }
  if (includeNumeric) {
    for (var i = 0; i <= 8; i++) {
      passwordCharacters.push(i.toString());
    }
  }
