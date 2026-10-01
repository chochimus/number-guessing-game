import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import Game from '../lib/game.js';

describe("Game class", () => {
  it ("initially creates a random guess", () => {
    const game = new Game(1);
    assert.strictEqual(typeof game.number, 'number');
  });
  it ("Takes a difficulty easy, medium, hard and sets corresponding chances", () => {
    const easyGame = new Game('easy');
    const mediumGame = new Game('medium');
    const hardGame = new Game('hard');

    assert.strictEqual(easyGame.chances, 10);
    assert.strictEqual(mediumGame.chances, 5);
    assert.strictEqual(hardGame.chances, 3);
  });
  it ("Returns true and number of attempts if correct", () => {
    const game = new Game('easy');
    const result = game.makeGuess(game.number);
    
    assert.deepStrictEqual(result, {result: true, attempts: 1});
  });
  it ("Returns false and hint if incorrect", () => {
    const game = new Game('easy');
    const result = game.makeGuess(0);
    
    assert.deepStrictEqual(result, {result: false, hint: 'lower'});
  });
  it ("Correctly returns if game is over", () => {
    const game = new Game('hard');
    game.makeGuess(0);
    game.makeGuess(0);
    assert.strictEqual(false, game.isOver());
    game.makeGuess(0);
    assert.strictEqual(true, game.isOver());
  })
})