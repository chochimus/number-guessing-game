const DIFFICULTIES = [10, 5, 3];

export default class Game {
  constructor(difficulty) {
    this.number = Math.floor(Math.random() * 100) + 1;
    this.chances = DIFFICULTIES[difficulty - 1];
    this.attempts = 0;
  }
  makeGuess(number) {
    this.attempts += 1;
    if (number === this.number) {
      return {result: true, attempts: this.attempts};
    } else {
      return {result: false, hint: number > this.number ? 'greater' : 'lower'};
    }
  }
  isOver() {
    return this.attempts >= this.chances;
  }
}