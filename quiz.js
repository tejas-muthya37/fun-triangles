const btnSubmit = document.querySelector("#btn-submit");
const quizForm = document.querySelector(".quiz-form");
const outputDiv = document.querySelector("#output");

const correctAnswers = ["90", "right", "one", "12,16,20", "equilateral"];

function calculateScore() {
  var score = 0;
  var index = 0;
  const formResults = new FormData(quizForm);
  for (var value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score += 1;
    }
    index += 1;
  }
  outputDiv.innerText = "Your score is " + score;
}

btnSubmit.addEventListener("click", calculateScore);
