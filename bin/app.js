import Game from "../lib/game.js";
import { welcome, getDifficulty, getGuess, gameResults } from "../lib/cli.js";

function app() {
  welcome();
  let difficulty = getDifficulty();
  let game = new Game(difficulty);
  let response;
  while (!game.isOver()) {
    let guess = getGuess();
    response = game.makeGuess(guess);
    if (response.result) {
      break;
    }
    console.log(`Guess ${response.hint}`);
  };
  gameResults(response);
}

app();