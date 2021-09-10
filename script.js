const button = document.getElementById("btn");
const copyBtn = document.getElementById("btn-copy");
const generatePassword = () => {
  const generatedPassword = document.getElementById("generated-password");
  const passwordLength = document.getElementById("length-input").value;
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  generatedPassword.value = password;
};

const copyPassword = () => {
  let password = document.getElementById("generated-password");
  password.select();
  document.execCommand("copy");
};

button.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
