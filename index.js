let button = document.querySelector("button");

/* colors of body
 --dark: #292C35;
 --light: #F1F1F1; */

button.addEventListener("click", function () {

  if (button.style.left == "0%") {
    button.style.left = "50%";
    document.body.style.backgroundColor = "#292C35";
  } else {
    button.style.left = "0%";
    document.body.style.backgroundColor = "#F1F1F1";
  }
  console.log(button.style.left);

});
