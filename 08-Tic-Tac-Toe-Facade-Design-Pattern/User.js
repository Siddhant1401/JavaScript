const Game = require("./Game");

let g1 = Game.newGame("Sid","Ram")
let g2 = Game.newGame("Ramesh","Suresh")

console.log(g1.play(0));
console.log(g2.play(0));
console.log(g1.play(4));
console.log(g2.play(7));
console.log(g1.play(1));
console.log(g2.play(5));

g1.resetGame();
console.log("Game Restted");
