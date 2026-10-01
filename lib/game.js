const CHANCES = {
  easy: 10,
  medium: 5,
  hard: 3,
};

export default class Game {
  constructor(difficulty) {
    this.number = Math.floor(Math.random() * 100) + 1;
    this.chances = CHANCES[difficulty];
    this.attempts = 0;
  }
  makeGuess(number) {
    this.attempts += 1;
    if (number === this.number) {
      return {result: true, attempts: this.attempts};
    } else {
      return {result: false, hint: number > this.number ? 'lower' : 'higher'};
    }
  }
  isOver() {
    return this.attempts >= this.chances;
  }
}