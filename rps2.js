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
const you = document.querySelector(".you");
const house = document.querySelector(".house");
const closeIcon = document.querySelector(".closeIcon");
const rulesbutton = document.querySelector(".rulesbutton");
const overlay = document.querySelector(".overlay");
let x = window.matchMedia("(max-width: 800px)");
let scoreUpdate = 0;
const borderList = ["rocked", "papered", "scissored"];
const scoreboard = [0, 0];


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

  // checks if both scores are above zero before substracting
  function checkAboveZero() {
    for(let x = 0; x < 2; x++){
      if (scoreboard[x] > 0) {
        scoreboard[x]--;
      } else {
        scoreboard[x] = 0;
      }
    }
  }
  // updates both scores for results other than draw
  function updateBoardView(picker, x){
      scoreboard[x]++;
      picker.textContent = scoreboard[x];
  }
  // updates both scores for draw result 
  // (this function also calls the function to check if both scores are above zero)
  function updateBoardViewDraw(){
    if (scoreboard[0] == 1 && scoreboard[1] == 0) {
      you.textContent = scoreboard[0];
      house.textContent = scoreboard[1];
    } else if (scoreboard[1] == 1 && scoreboard[0] == 0) {
      you.textContent = scoreboard[0];
      house.textContent = scoreboard[1];
    } else {
      checkAboveZero();
      you.textContent = scoreboard[0];
      house.textContent = scoreboard[1];
    }
  }
  function updateWinStatus(winner, designedClass){
      whoWon.textContent = `${winner}`;
      designedClass.className = "wavyy";
  }
  // checks who won and displays result
  if (housePicks == 0) {
    if (n == 0) {
      whoWon.textContent = "Draw!";
      updateBoardViewDraw();
    } else if (n == 1) {
      updateWinStatus("You Win", choicedContainer);
      updateBoardView(you, 0);
    } else {
      updateWinStatus("You Lose", compContainer);
      updateBoardView(house, 1);
    }
  } else if (housePicks == 1) {
    if (n == 0) {
      updateWinStatus("You Lose", compContainer);
      updateBoardView(house, 1);
    } else if (n == 1) {
      whoWon.textContent = "Draw!";
      updateBoardViewDraw();
    } else {
      updateWinStatus("You Win", choicedContainer);
      updateBoardView(you, 0);
    }
  } else {
    if (n == 0) {
      updateWinStatus("You Win", choicedContainer);
      updateBoardView(you, 0);
    } else if (n == 1) {
      updateWinStatus("You Lose", compContainer);
      updateBoardView(house, 1);
    } else {
      whoWon.textContent = "Draw!";
      updateBoardViewDraw();
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
