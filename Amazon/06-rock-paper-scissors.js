const Rocky = document.getElementById('rock');
const paperBin = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const ResultBtn = document.getElementById('result');
const winSpan = document.getElementById('win');
const lossSpan = document.getElementById('losses');
const tiesSpan = document.getElementById('ties');
const resetBtn = document.getElementById('reset');



let win = 0;
let losses = 0;
let ties = 0;

function playGame(userChoice) {
  const RandomNumber = Math.floor(Math.random() * 3);
  const choice = ['Rock', 'paper', 'scissors'];
  const computerChoice = choice[RandomNumber];

  let result = ''

  if (userChoice === computerChoice) {
    result = `it is a tie`;
    ties++;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors')||
    (userChoice === 'paper' && computerChoice === 'rock')||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `you win`;
    win++;
  } else {
    result = `you lose`
    losses++
  }

  ResultBtn.textContent = `You pick ${userChoice}, Computer pick ${computerChoice}. ${result}`

  updateScore();
}


function updateScore() {
  winSpan.textContent = win;
  tiesSpan.textContent = ties;
  lossSpan.textContent = losses
}


function resetScore() {
  win = 0;
  losses = 0;
  ties = 0;

  updateScore();
  ResultBtn.textContent = '';
}
