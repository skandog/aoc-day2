let input = `A Y
B X
C Z`;

let splinput = input.split("\n");

const moves = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};



console.log(splinput.length);

for (let i = 0; i < splinput.length; i++) {
  let oppoMove = moves[splinput[i].charAt(0)];
  let yourMove = moves[splinput[i].charAt(2)];

  console.log("oppo: ", oppoMove, "; player: ", yourMove);
}
