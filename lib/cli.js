import readlineSync from 'readline-sync';

function welcome() {
  console.log(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.`); 
}

function getDifficulty() {
  const difficulty = ['easy', 'medium', 'hard'];
  console.log(`Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)\n`);
  let response = readlineSync.question('Enter your choice: ');
  while (!['1', '2', '3'].includes(response)) {
    console.log('Please enter a valid difficulty (1, 2, or 3)');
    response = readlineSync.question('Enter your choice: ');
  }
  console.log(`Great! You have selected the ${difficulty[response - 1]} difficulty level.`);
  console.log(`Let's start the game`);
  return difficulty[response - 1];
}

function getGuess() {
  let guess = Number(readlineSync.question('Enter your guess: '));

  while (Number.isNaN(guess) || guess < 1 || guess > 100) {
    console.log('Your guess must be a number between 1 and 100.');
    guess = Number(readlineSync.question('Enter your guess: '));
  }

  return guess;
}

function gameResults(response) {
  if (response.result) {
    console.log(`Congratulations! You guessed the correct number in ${response.attempts} attempt${response.attempts > 1 ? 's': ''}!`);
  } else {
    console.log(`You didn't guess the number.`);
    
  }
}

export { welcome, getDifficulty, getGuess, gameResults };