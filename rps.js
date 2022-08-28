"use strict";
const innerbox2 = document.querySelector(".innerbox2")
const resultbox = document.querySelector(".resultbox")
const hoomanChoice = document.querySelector("#hooman-choice")
const computerChoice = document.querySelector("#computer-choice")
const choiced = document.querySelector(".choiced")
const comp = document.querySelector(".comp")
const whoWon = document.querySelector(".whoWon")
const again = document.querySelector("#again")
const choicedContainer = document.querySelector("#choicedContainer");
const compContainer = document.querySelector("#compContainer");
const score = document.querySelector(".score")



let scoreUpdate = 0
const borderList = ["rocked", "papered", "scissored"]
function selected(n) {
    const housePicks = Math.trunc(Math.random() * 3);
    console.log(housePicks);
    resultbox.classList.add("displayflex");
    innerbox2.classList.remove("displayblock");
    hoomanChoice.setAttribute("src", `images/icon-${n}.svg`);
    computerChoice.setAttribute("src", `images/icon-${housePicks}.svg`)
    choiced.className = `choiced ${borderList[n]}`
    comp.className = `comp ${borderList[housePicks]}`
    again.addEventListener("click", function () {
        resultbox.classList.remove("displayflex");
        innerbox2.classList.add("displayblock");
        choicedContainer.className = "";
        compContainer.className = "";
    });

    if(housePicks == 0){
        if (n == 0){
            whoWon.textContent = "Draw!"
        }else if(n == 1){
            whoWon.textContent = "You win";
            choicedContainer.className = ("wavyy")
            scoreUpdate++
            score.textContent = scoreUpdate;
        }else{
            whoWon.textContent = "You lose";
            compContainer.className = ("wavyy");
            scoreUpdate--;
            if(scoreUpdate < 0){
              scoreUpdate = 0;
              score.textContent = scoreUpdate;
            }else{
                score.textContent = scoreUpdate;
            }
        }
        console.log("if")
    }else if (housePicks == 1){
        if (n == 0) {
          whoWon.textContent = "You lose";
          compContainer.className = ("wavyy");
          scoreUpdate--;
          if (scoreUpdate < 0) {
            scoreUpdate = 0;
            score.textContent = scoreUpdate;
          } else {
            score.textContent = scoreUpdate;
          }
        } else if(n == 1) {
          whoWon.textContent = "Draw!";
        } else {
          whoWon.textContent = "You Win";
          choicedContainer.className = ("wavyy");
          scoreUpdate++;
          score.textContent = scoreUpdate;
        }
        console.log("else if1");
    }else{
        if (n == 0) {
          whoWon.textContent = "You win";
          choicedContainer.className = ("wavyy");
          scoreUpdate++;
          score.textContent = scoreUpdate;
        } else if (n == 1) {
          whoWon.textContent = "You lose";
          compContainer.className = ("wavyy");
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
        console.log("else if2");
    }
}

let start = true














