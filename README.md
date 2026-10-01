# Number Guessing Game

A command-line number guessing game built with JavaScript and Node.js.

The computer randomly selects a number between 1 and 100, and the player tries to guess it within a limited number of attempts based on the selected difficulty.

## Features

- Randomly generates a number between 1 and 100
- Three difficulty levels:
  - **Easy** — 10 chances
  - **Medium** — 5 chances
  - **Hard** — 3 chances
- Provides hints indicating whether the next guess should be higher or lower
- Validates user input
- Reports whether the player wins or runs out of chances

## Requirements

- Node.js
- npm

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## Running the Game

Start the game with:

```bash
node app.js
```

Follow the prompts in the terminal to select a difficulty and enter your guesses.

## How to Play

1. The game generates a random number between 1 and 100.
2. Select a difficulty:
   - `1` — Easy (10 chances)
   - `2` — Medium (5 chances)
   - `3` — Hard (3 chances)
3. Enter a guess between 1 and 100.
4. The game tells you whether your guess is too high or too low.
5. Continue guessing until you find the number or run out of chances.

## Project Structure

```text
.
├── app.js
├── lib/
│   ├── cli.js
│   └── game.js
├── test/
│   └── game_test.js
├── package.json
└── README.md
```

### `app.js`

Coordinates the application flow by connecting the CLI and the `Game` class.

### `lib/cli.js`

Handles terminal interaction, including displaying messages and collecting user input.

### `lib/game.js`

Contains the game state and rules, including the randomly generated number, number of chances, guesses, and game-over logic.

## Dependencies

- [`readline-sync`](https://www.npmjs.com/package/readline-sync) — used for synchronous command-line input.