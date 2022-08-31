"use strict";
// global variables declared here
const innerbox2 = document.querySelector(".innerbox2");
const resultbox = document.querySelector(".resultbox");
const hoomanChoice = document.querySelector("#hooman-choice");
const computerChoice = document.querySelector("#computer-choice");
const choiced = document.querySelector(".choiced");
const comp = document.querySelector(".comp");
const whoWon = document.querySelector(".whoWon");
const again = document.querySelector("#again");
const choicedContainer = document.querySelector("#choicedContainer");
const compContainer = document.querySelector("#compContainer");
const score = document.querySelector(".score");
const closeIcon = document.querySelector(".closeIcon");
const rulesbutton = document.querySelector(".rulesbutton");
const overlay = document.querySelector(".overlay");
let x = window.matchMedia("(max-width: 800px)");
let scoreUpdate = 0;
const borderList = ["rocked", "papered", "scissored"];

// Function for when the user selects a choice
function selected(n) {
  // computer makes a random choice
  const housePicks = Math.trunc(Math.random() * 3);
  // both choices connected together and mapped to new display
  innerbox2.classList.remove("displayblock");
  hoomanChoice.setAttribute("src", `../images/icon-${n}.svg`);
  computerChoice.setAttribute("src", `../images/icon-${housePicks}.svg`);
  choiced.className = `choiced ${borderList[n]}`;
  comp.className = `comp ${borderList[housePicks]}`;
  // make a slight change to display if media query matches
  if (x.matches) {
    resultbox.classList.add("displaygrid");
  } else {
    resultbox.classList.add("displayflex");
  }
  // when user plays again
  again.addEventListener("click", function () {
    resultbox.classList.remove("displayflex", "displaygrid");
    innerbox2.classList.add("displayblock");
    choicedContainer.className = "";
    compContainer.className = "";
  });

  // checks who won and displays result
  if (housePicks == 0) {
    if (n == 0) {
      whoWon.textContent = "Draw!";
    } else if (n == 1) {
      whoWon.textContent = "You win";
      choicedContainer.className = "wavyy";
      scoreUpdate++;
      score.textContent = scoreUpdate;
    } else {
      whoWon.textContent = "You lose";
      compContainer.className = "wavyy";
      scoreUpdate--;
      if (scoreUpdate < 0) {
        scoreUpdate = 0;
        score.textContent = scoreUpdate;
      } else {
        score.textContent = scoreUpdate;
      }
    }
  } else if (housePicks == 1) {
    if (n == 0) {
      whoWon.textContent = "You lose";
      compContainer.className = "wavyy";
      scoreUpdate--;
      if (scoreUpdate < 0) {
        scoreUpdate = 0;
        score.textContent = scoreUpdate;
      } else {
        score.textContent = scoreUpdate;
      }
    } else if (n == 1) {
      whoWon.textContent = "Draw!";
    } else {
      whoWon.textContent = "You Win";
      choicedContainer.className = "wavyy";
      scoreUpdate++;
      score.textContent = scoreUpdate;
    }
  } else {
    if (n == 0) {
      whoWon.textContent = "You win";
      choicedContainer.className = "wavyy";
      scoreUpdate++;
      score.textContent = scoreUpdate;
    } else if (n == 1) {
      whoWon.textContent = "You lose";
      compContainer.className = "wavyy";
      scoreUpdate--;
      if (scoreUpdate < 0) {
        scoreUpdate = 0;
        score.textContent = scoreUpdate;
      } else {
        score.textContent = scoreUpdate;
      }
    } else {
      whoWon.textContent = "Draw!";
    }
  }
}

// popUps to view and close rules
closeIcon.addEventListener("click", function () {
  overlay.classList.remove("displayflex");
});
rulesbutton.addEventListener("click", function () {
  overlay.classList.add("displayflex");
});
