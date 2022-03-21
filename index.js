const button = document.querySelector("button");

const darkTheme = "#292C35";
const lightTheme = "#F1F1F1";

const positionLeft = "0%";
const positionRight = "50%";

button.addEventListener("click", function () {

  if (button.style.left == positionLeft) {
    button.style.left = positionRight;
    document.body.style.backgroundColor = darkTheme;
  } else {
    button.style.left = positionLeft;
    document.body.style.backgroundColor = lightTheme;
  }
});
