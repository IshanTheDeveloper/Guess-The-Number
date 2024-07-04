let inputs = document.querySelector("#input-area");
let buttons = document.querySelector(".button");
let randomNum = Math.floor(Math.random() * 100 + 1);
let results = document.querySelector("#resulting-area");
let textarea1 = document.querySelector("#text4");
let textarea2 = document.querySelector("#text6");
let previousGuesses = [];

buttons.addEventListener("click", function () {
  if (textarea2.innerText == "0") {
    return;
  }
  const val1 = Number(inputs.value);
  if (val1 === randomNum) {
    results.innerHTML = `Congrats , the entered number ${inputs.value} is equal to the random number`;
  } else {
    results.innerHTML = "Please try again";
  }
  arrayNum();
  resulting();
});
function resulting() {
  textarea2.innerText = Number(textarea2.innerText) - 1;
}

function arrayNum() {
  previousGuesses.push(inputs.value);
  let finalString = "";
  previousGuesses.forEach((element, index) => {
    if (index == 0) {
      finalString = ` ${element}`;
    } else {
      finalString = ` ${finalString} , ${element}`;
    }
  });
  textarea1.innerHTML = finalString;
}
