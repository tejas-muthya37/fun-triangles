const sideInputs = document.querySelectorAll(".side-inputs");
const btnArea = document.querySelector("#btn-area");
const outputDiv = document.querySelector("#output");

btnArea.addEventListener("click", calculateArea);

function calculateArea() {
  var semiPerimeter = calculateSemiPeri();
  var innerTerm =
    semiPerimeter *
    (semiPerimeter - Number(sideInputs[0].value)) *
    (semiPerimeter - Number(sideInputs[1].value)) *
    (semiPerimeter - Number(sideInputs[2].value));
  var area = Math.sqrt(innerTerm);
  area = area.toFixed(4);
  outputDiv.innerText =
    "The area of the triangle using Heron's formula is " + area + " units";
}

function calculateSemiPeri() {
  var semiPeri =
    (Number(sideInputs[0].value) +
      Number(sideInputs[1].value) +
      Number(sideInputs[2].value)) /
    2;
  return semiPeri;
}
