const sideInputs = document.querySelectorAll(".side-inputs");
const hypoBtn = document.querySelector("#btn-hypo");
const outputDiv = document.querySelector("#output");

function sumOfSquares(a, b) {
  return a * a + b * b;
}

function calculateHypo() {
  var hypoLength = Math.sqrt(
    sumOfSquares(Number(sideInputs[0].value), Number(sideInputs[1].value))
  );
  outputDiv.innerText =
    "The length of the hypotenuse is " + hypoLength.toFixed(4);
}

hypoBtn.addEventListener("click", calculateHypo);
