let button = document.querySelector("button");

button.addEventListener("click", function () {

  if (button.style.left == "0%" || !button.style.left) {
    button.style.left = "50%";
  } else {
    button.style.left = "0%";
  }
  console.log(button.style.left);

});