var randomNumber1 = 0;
var randomNumber2 = 0;
var player1Score = 0;
var player2Score = 0;
var scoreToWin = 0;
var SceneId = 0;
var Player1Name = "Player 1";
var Player2Name = "Player 2";
var aPlayerWon = false;

document.querySelector(".playbtn").onclick = () => {
  PlayGame();
};

document.getElementById("1-round-btn").onclick = () => {
  setRound(1);
};

document.getElementById("3-round-btn").onclick = () => {
  setRound(3);
};

document.getElementById("5-round-btn").onclick = () => {
  setRound(5);
};

document.getElementById("shootBtn").onclick = () => {
  shootGame();
};

updateScore();

function PlayGame() {
  document.getElementById("firstSection").classList.add("hide");
  document.getElementById("secondSection").classList.toggle("hide");
}

function setRound(roundNum) {
  if (player1Score == 0 && player2Score == 0) {
    scoreToWin = roundNum;
    switch (roundNum) {
      case 1:
        document
          .getElementById("1-round-btn")
          .classList.add("roundbtnselected");
        document
          .getElementById("3-round-btn")
          .classList.remove("roundbtnselected");
        document
          .getElementById("5-round-btn")
          .classList.remove("roundbtnselected");

        break;
      case 3:
        document
          .getElementById("1-round-btn")
          .classList.remove("roundbtnselected");
        document
          .getElementById("3-round-btn")
          .classList.add("roundbtnselected");
        document
          .getElementById("5-round-btn")
          .classList.remove("roundbtnselected");
        break;
      case 5:
        document
          .getElementById("1-round-btn")
          .classList.remove("roundbtnselected");
        document
          .getElementById("3-round-btn")
          .classList.remove("roundbtnselected");
        document
          .getElementById("5-round-btn")
          .classList.add("roundbtnselected");
        break;
    }
  }
}

var form = document.getElementById("playerNameFormId");
function startGame(event) {
  event.preventDefault();
  if (scoreToWin == 0) {
    alert("Please select how many round.");
  } else {
    Player1Name = document.forms["playerNameForm"]["Player1Name"].value;
    Player2Name = document.forms["playerNameForm"]["Player2Name"].value;
    document.getElementById("player-1-name").textContent = Player1Name;
    document.getElementById("player-2-name").textContent = Player2Name;
    document.getElementById("secondSection").classList.toggle("hide");
    document.getElementById("thirdSection").classList.toggle("hide");
    updateScore();
  }
}
form.addEventListener("submit", startGame);

function shootGame() {
  if (scoreToWin > 0 && !aPlayerWon) {
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
  } else if (scoreToWin > 0 && aPlayerWon) {
    location.reload();
  }
}

function addScore1() {
  player1Score += 1;
  document.querySelector(".roundDes").textContent =
    Player1Name + " got this round!";
  updateScore();
}
function addScore2() {
  player2Score += 1;
  document.querySelector(".roundDes").textContent =
    Player2Name + " got this round!";
  updateScore();
}

function tieScore() {
  document.querySelector(".roundDes").textContent = "It's a tie!";
}

function updateScore() {
  document.getElementById("player1-score").textContent =
    "SCORE: " + player1Score + " / " + scoreToWin;
  document.getElementById("player2-score").textContent =
    "SCORE: " + player2Score + " / " + scoreToWin;

  if (player1Score > player2Score && player1Score !== 0) {
    document.querySelector(".crown1").style.display = "inline";
    document.querySelector(".crown2").style.display = "none";
    if (player1Score >= scoreToWin) {
      document.querySelector(".shootButton").textContent = "Try Again";
      document.querySelector(".roundDes").textContent =
        Player1Name + " is the winner!";
      aPlayerWon = true;
      alert(Player1Name + " won!");
    }
  } else if (player2Score > player1Score && player2Score !== 0) {
    document.querySelector(".crown2").style.display = "inline";
    document.querySelector(".crown1").style.display = "none";
    if (Player2Score >= scoreToWin) {
      document.querySelector(".shootButton").textContent = "Try Again";
      document.querySelector(".roundDes").textContent =
        Player2Name + " is the winner!";
      aPlayerWon = true;
      alert(Player1Name + " won!");
    }
  } else {
    document.querySelector(".crown1").style.display = "none";
    document.querySelector(".crown2").style.display = "none";
  }
}
