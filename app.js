const inputs = document.querySelectorAll(".angle-input");
const triangleBtn = document.querySelector("#btn-triangle");
const outputDiv = document.querySelector("#output");

function isTriangle() {
  if (sumOfAngles(inputs[0].value, inputs[1].value, inputs[2].value) === 180) {
    outputDiv.innerText = "Triangle";
  } else {
    outputDiv.innerText = "Not triangle";
  }
}

function sumOfAngles(ang1, ang2, ang3) {
  return Number(ang1) + Number(ang2) + Number(ang3);
}

triangleBtn.addEventListener("click", isTriangle);
