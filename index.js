import input from "./input.js";

// // Dummy input
// let input = `A Y
// B X
// C Z`;

let splinput = input.split("\n");

const moves = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const scores = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

let totalScore = 0;

console.log(splinput.length);

for (let i = 0; i < splinput.length; i++) {
  let oppoMove = moves[splinput[i].charAt(0)];
  let yourMove = moves[splinput[i].charAt(2)];
  console.log("oppo: ", oppoMove, "; player: ", yourMove);
  totalScore += scores[yourMove];

  if (yourMove == oppoMove) {
    totalScore += 3;
  } else if (yourMove === "Rock" && oppoMove === "Scissors") {
    totalScore += 6;
  } else if (yourMove === "Paper" && oppoMove === "Rock") {
    totalScore += 6;
  } else if (yourMove === "Scissors" && oppoMove === "Paper") {
    totalScore += 6;
  }
}

console.log(totalScore);
