var randomNumber1 = 0;
var randomNumber2 = 0;
var player1Score = 0;
var player2Score = 0;
var scoreToWin = 0;

document.querySelector(".shootButton").onclick = function () {
  shootGame();
};
document.querySelector(".oneRound").onclick = function () {
  setRound(1);
};
document.querySelector(".threeRound").onclick = function () {
  setRound(3);
};
document.querySelector(".fiveRound").onclick = function () {
  setRound(5);
};
updateScore();

function setRound(roundNum) {
  if (player1Score == 0 && player2Score == 0) {
    scoreToWin = roundNum;
    switch (roundNum) {
      case 1:
        document
          .querySelector(".oneRound")
          .classList.remove("btn-outline-warning");
        document.querySelector(".oneRound").classList.add("btn-warning");
        document
          .querySelector(".threeRound")
          .classList.add("btn-outline-warning");
        document.querySelector(".threeRound").classList.remove("btn-warning");
        document
          .querySelector(".fiveRound")
          .classList.add("btn-outline-warning");
        document.querySelector(".fiveRound").classList.remove("btn-warning");
        break;
      case 3:
        document
          .querySelector(".threeRound")
          .classList.remove("btn-outline-warning");
        document.querySelector(".threeRound").classList.add("btn-warning");
        document
          .querySelector(".oneRound")
          .classList.add("btn-outline-warning");
        document.querySelector(".oneRound").classList.remove("btn-warning");
        document
          .querySelector(".fiveRound")
          .classList.add("btn-outline-warning");
        document.querySelector(".fiveRound").classList.remove("btn-warning");
        break;
      case 5:
        document
          .querySelector(".fiveRound")
          .classList.remove("btn-outline-warning");
        document.querySelector(".fiveRound").classList.add("btn-warning");
        document
          .querySelector(".threeRound")
          .classList.add("btn-outline-warning");
        document.querySelector(".threeRound").classList.remove("btn-warning");
        document
          .querySelector(".oneRound")
          .classList.add("btn-outline-warning");
        document.querySelector(".oneRound").classList.remove("btn-warning");
        break;
    }
  } else {
    alert(
      "It is impossible to change the number of rounds while in game. Refresh the page to start a new round."
    );
  }
}

function shootGame() {
  if (scoreToWin > 0) {
    randomNumber1 = Math.floor(Math.random() * 3 + 1);
    randomNumber2 = Math.floor(Math.random() * 3 + 1);
    switch (randomNumber1) {
      case 1: //it is ROCK
        document
          .querySelector(".gameImg1")
          .setAttribute("src", "images/Rock.gif");
        document.querySelector(".moveDes1").textContent = "Rock!";
        break;
      case 2: //it is Paper
        document
          .querySelector(".gameImg1")
          .setAttribute("src", "images/Paper.gif");
        document.querySelector(".moveDes1").textContent = "Paper!";
        break;
      case 3: //it is Scissors`1
        document
          .querySelector(".gameImg1")
          .setAttribute("src", "images/scissors.gif");
        document.querySelector(".moveDes1").textContent = "Scissors!";
        break;
    }

    switch (randomNumber2) {
      case 1: //it is ROCK
        document
          .querySelector(".gameImg2")
          .setAttribute("src", "images/Rock.gif");
        document.querySelector(".moveDes2").textContent = "Rock!";
        if (randomNumber1 == 3) {
          //he loss
          addScore2();
        } else if (randomNumber1 == 2) {
          //he won
          addScore1();
        } else {
          tieScore();
        }
        break;
      case 2: //it is Paper
        document
          .querySelector(".gameImg2")
          .setAttribute("src", "images/Paper.gif");
        document.querySelector(".moveDes2").textContent = "Paper!";
        if (randomNumber1 == 1) {
          //he loss
          addScore2();
        } else if (randomNumber1 == 3) {
          //he won
          addScore1();
        } else {
          tieScore();
        }
        break;
      case 3: //it is Scissors
        document
          .querySelector(".gameImg2")
          .setAttribute("src", "images/scissors.gif");
        document.querySelector(".moveDes2").textContent = "Scissors!";
        if (randomNumber1 == 2) {
          //he loss
          addScore2();
        } else if (randomNumber1 == 1) {
          //he won
          addScore1();
        } else {
          tieScore();
        }
    }
  } else if (scoreToWin == 0) {
    alert("Click the number of rounds.");
  } else {
    location.reload();
  }
}

function addScore1() {
  player1Score += 1;
  document.querySelector(".roundDes").textContent = "Player 1 got this round!";
  updateScore();
}
function addScore2() {
  player2Score += 1;
  document.querySelector(".roundDes").textContent = "Player 2 got this round!";
  updateScore();
}

function tieScore() {
  document.querySelector(".roundDes").textContent = "It's a tie!";
}

function updateScore() {
  document.querySelector(".scoreText1").textContent = "SCORE: " + player1Score;
  document.querySelector(".scoreText2").textContent = "SCORE: " + player2Score;

  if (player1Score == scoreToWin && scoreToWin > 0) {
    document.querySelector(".crown1").style.display = "inline";
    document.querySelector(".crown2").style.display = "none";
    scoreToWin = -1;
    document.querySelector(".shootButton").textContent = "Try Again";
    document.querySelector(".roundDes").textContent = "Player 1 is the winner!";
    //alert("Player 1 won!");
  } else if (player2Score == scoreToWin && scoreToWin > 0) {
    document.querySelector(".crown2").style.display = "inline";
    document.querySelector(".crown1").style.display = "none";
    scoreToWin = -1;
    document.querySelector(".shootButton").textContent = "Try Again";
    document.querySelector(".roundDes").textContent = "Player 2 is the winner!";
    //alert("Player 2 won!");
  } else {
    document.querySelector(".crown1").style.display = "none";
    document.querySelector(".crown2").style.display = "none";
  }
}
