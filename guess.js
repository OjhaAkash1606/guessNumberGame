const questionSymbol = document.querySelector(".questionMark");
const checkButton = document.querySelector(".check");
const messageDisplay = document.querySelector(".message");
const scoringDisplay = document.querySelector(".scoring");
const bodyDisplay = document.querySelector("body");
const highScoringDisplay = document.querySelector(".highScoring");
const againButton = document.querySelector(".again");
const secretNumberInvisible = document.querySelector(".secret");
const guessNumber = document.querySelector(".guess");

let secretNumber = Math.ceil(Math.random() * 20);


let scoreNumber = 10;
scoringDisplay.textContent = scoreNumber;
let highScoreNumber = 0;

highScoringDisplay.textContent = "0";

checkButton.addEventListener("click", () => {
  const guessNumberDisplay = Number(guessNumber.value);

  if (guessNumberDisplay === secretNumber) {
    if (scoreNumber === 10) {
      messageDisplay.textContent = "You win the game!";
      guessNumber.setAttribute("disabled", "true");
      bodyDisplay.style.backgroundColor = "#87CEEB";
      guessNumber.style.backgroundColor = "aliceblue";
      guessNumber.style.color = "black";
      highScoreNumber = scoreNumber;
      highScoringDisplay.textContent = highScoreNumber;
    } else {
      messageDisplay.textContent = "Correct Number!";
      guessNumber.setAttribute("disabled", "true");
      bodyDisplay.style.backgroundColor = "#87CEEB";
      guessNumber.style.backgroundColor = "aliceblue";
      guessNumber.style.color = "black";
      highScoreNumber = scoreNumber;
      highScoringDisplay.textContent = highScoreNumber;
    }
  }
  if (guessNumberDisplay > secretNumber && scoreNumber > 0) {
    if (guessNumberDisplay > 20) {
      messageDisplay.textContent = "Invalid Number!";
    } else if (guessNumberDisplay > secretNumber) {
      messageDisplay.textContent = "Too High!";
      scoreNumber--;
      scoringDisplay.textContent = scoreNumber;
      if (scoreNumber === 0) {
        messageDisplay.textContent = "You lost the game!";
        guessNumber.setAttribute("disabled", "true");
        bodyDisplay.style.backgroundColor = "#87CEEB";
        guessNumber.style.backgroundColor = "aliceblue";
        guessNumber.style.color = "black";
        scoringDisplay.textContent = 0;
      }
    }
  }
  if (guessNumberDisplay < secretNumber && scoreNumber > 0) {
    if (guessNumberDisplay < 1) {
      messageDisplay.textContent = "Invalid Number!";
    } else if (guessNumberDisplay < secretNumber) {
      messageDisplay.textContent = "Too Low!";
      scoreNumber--;
      scoringDisplay.textContent = scoreNumber;
      if (scoreNumber === 0) {
        messageDisplay.textContent = "You lost the game!";
        guessNumber.setAttribute("disabled", "true");
        bodyDisplay.style.backgroundColor = "#87CEEB";
        guessNumber.style.backgroundColor = "aliceblue";
        guessNumber.style.color = "black";
        scoringDisplay.textContent = 0;
      }
    }
  }
});
againButton.addEventListener("click", () => {
  const guessNumberDisplay = Number(guessNumber.value);
  if (guessNumberDisplay === secretNumber) {
    if (scoreNumber === 10) {
      guessNumber.setAttribute("disabled", "true");
      bodyDisplay.style.backgroundColor = "#87CEEB";
      messageDisplay.textContent = "You win the game!";
      highScoringDisplay.textContent = highScoreNumber;
      scoringDisplay.textContent = scoreNumber;
    } else {
      guessNumber.value = "0";
      guessNumber.removeAttribute("disabled", "true");
      secretNumber = Math.ceil(Math.random() * 20);
      secretNumberInvisible.textContent = secretNumber;
      bodyDisplay.style.backgroundColor = "black";
      messageDisplay.textContent = "Start guessing...!";
      highScoringDisplay.textContent = highScoreNumber;
      scoreNumber = 10;
      scoringDisplay.textContent = scoreNumber;
    }
  }
});