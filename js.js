let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".secret-number").value = secretNumber;
console.log(secretNumber);

let scoreValue = 20;
let highScore = 0;

//create a function refractoring value with same content
const displayMessage = function (e) {
  document.querySelector(".message").textContent = e;
};

document.querySelector(".check-button").addEventListener("click", function () {
  const guess = Number(document.querySelector(".client-input").value);
  console.log(guess, typeof guess);

  //when there is no input value
  if (!guess) {
    displayMessage("🚫 No number");
    // document.querySelector(".message").textContent = "🚫 No number";
  }
  //when guess match with secretNumber
  else if (guess === secretNumber) {
    displayMessage("👍 good guess");
    // document.querySelector(".message").textContent = "👍 good guess";
    document.querySelector(".secret-number").textContent = guess;
    document.querySelector(".container").style.backgroundColor =
      "rgb(0, 255, 21)";
    document.querySelector(".secret-number").style.backgroundColor = "white";
    document.querySelector(".secret-number").style.width = "25rem";

    if (scoreValue > highScore) {
      highScore = scoreValue;
      document.querySelector(".highscore-number").textContent = highScore;
    }
  }
  //when guess is not equal to secret number
  else if (guess !== secretNumber) {
    if (scoreValue > 1) {
      displayMessage(guess > secretNumber ? "🥴 too high" : "😤 too low");
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "🥴 too high" : "😤 too low";
      scoreValue--;
      document.querySelector(".score-number").textContent = scoreValue;
    } else {
      displayMessage("😢 you lost the game");
      //   document.querySelector(".message").textContent = "😢 you lost the game";
      document.querySelector(".score-number").textContent = "0";
    }
  }
  //   else if (guess > secretNumber) {
  //     if (scoreValue > 1) {
  //       document.querySelector(".message").textContent = "🥴 too high";
  //       scoreValue--;
  //       document.querySelector(".score-number").textContent = scoreValue;
  //     } else {
  //       document.querySelector(".message").textContent = "😢 you lost the game";
  //       document.querySelector(".score-number").textContent = "0";
  //     }
  //   } else if (guess < secretNumber) {
  //     if (scoreValue > 1) {
  //       document.querySelector(".message").textContent = "😤 too low";
  //       scoreValue--;
  //       document.querySelector(".score-number").textContent = scoreValue;
  //     } else {
  //       document.querySelector(".message").textContent = "😢 you lost the game";
  //       document.querySelector(".score-number").textContent = "0";
  //     }
});

document.querySelector(".again-button").addEventListener("click", function () {
  scoreValue = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".secret-number").value = secretNumber;
  console.log(secretNumber);
  displayMessage("start guessing");
  //   document.querySelector(".message").textContent = "start guessing";
  document.querySelector(".score-number").textContent = scoreValue;
  document.querySelector(".container").style.backgroundColor = "yellow";
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".client-input").value = "";
  document.querySelector(".highscore-number").textContent = highScore;
});
