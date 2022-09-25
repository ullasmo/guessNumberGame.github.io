"use strict";
// document.querySelector(".messege").textContent = "Guessed correctly!!";
// document.querySelector(".secretnum").textContent = 13;
// document.querySelector(".chance").textContent = 10;
// document.querySelector(".number").value = 23;
let randomNumber = Math.floor(Math.random() * 20) + 1;
//let highScore = 00;
let chanceLeft = 20;

document.querySelector(".check").addEventListener("click", function () {
  const num = Number(document.querySelector(".number").value);
  if (!num) {
    document.querySelector(".messege").textContent = "Enter a number";
  } else if (randomNumber === num) {
    document.querySelector(".messege").textContent = "💥Guessed correctly!!";
    document.querySelector(".secretnum").textContent = randomNumber;
    document.querySelector(".score").innerHTML = chanceLeft;
    // if (chanceLeft > highScore) {
    //   highScore = chanceLeft;
    //   document.querySelector(".highscore").innerHTML = highScore;
    // }
    document.querySelector("body").style.backgroundColor = "#00ff00";
  } else if (randomNumber > num && randomNumber - num === 1) {
    if (chanceLeft >= 1) {
      document.querySelector(".messege").textContent =
        "✌️So Close!,a bit higher";
      chanceLeft--;
      document.querySelector(".chance").textContent = chanceLeft;
    } else {
      document.querySelector(".messege").textContent = "😩You lost the game";
    }
  } else if (randomNumber < num && num - randomNumber === 1) {
    if (chanceLeft >= 1) {
      document.querySelector(".messege").textContent =
        "✌️So Close!,a bit lower";
      chanceLeft--;
      document.querySelector(".chance").textContent = chanceLeft;
    } else {
      document.querySelector(".messege").textContent = "😩You lost the game";
    }
  } else if (randomNumber > num && randomNumber - num > 1) {
    if (chanceLeft >= 1) {
      document.querySelector(".messege").textContent = "⏬ Too low";
      chanceLeft--;
      document.querySelector(".chance").textContent = chanceLeft;
    } else {
      document.querySelector(".messege").textContent = "😩You lost the game";
    }
  } else if (randomNumber < num && num - randomNumber > 1) {
    if (chanceLeft >= 1) {
      document.querySelector(".messege").textContent = "⏫ Too high";
      chanceLeft--;
      document.querySelector(".chance").textContent = chanceLeft;
    } else {
      document.querySelector(".messege").textContent = "😩You lost the game";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  chanceLeft = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".chance").textContent = chanceLeft;
  document.querySelector(".messege").textContent = "Start guessing..";
  document.querySelector(".secretnum").textContent = "?";
  document.querySelector(".number").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
