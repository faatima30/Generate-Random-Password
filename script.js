const passwordBox = document.getElementById("password");
const length = 15; //leng of password

//all chars that are allowed
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%&*/-_";

//this will generate remaining characters
const allchars = uppercase + lowercase + number + symbol;

function createPassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  //since we generated 4 characters above below will generate the remaing
  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passwordBox.value = password; //ass value to the input
}

//here we will copy password
function copypassword() {
  passwordBox.select();
  document.execCommand("copy");
}
