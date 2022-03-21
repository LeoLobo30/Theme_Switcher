const button = document.querySelector("button");

const darkTheme = "#292C35";
const lightTheme = "#F1F1F1";

const positionLeft = "0%";
const positionRight = "50%";

const timeTransition = "0.4s";

function darkThemeConfig() {
  button.style.left = positionRight;
  document.body.style.backgroundColor = darkTheme;
}

function lightThemeConfig() {
  button.style.left = positionLeft;
  document.body.style.backgroundColor = lightTheme;
}

button.addEventListener("click", function () {
  if (button.style.left == positionLeft) {
    darkThemeConfig();
    localStorage.setItem("theme", "dark");
  } else {
    lightThemeConfig();
    localStorage.setItem("theme", "light");
  }
});

window.onload = () => {
  let localTheme = localStorage.getItem("theme");

  if (localTheme == "dark") {
    darkThemeConfig();
  } else {
    lightThemeConfig();
  }

  document.body.style.transitionDuration = timeTransition;
  button.style.transitionDuration = timeTransition;
};

//if want clear localStorage
//localStorage.removeItem("theme");
