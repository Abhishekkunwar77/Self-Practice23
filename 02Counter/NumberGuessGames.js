import PromptSync from 'prompt-sync';
let prompt = PromptSync();
let randomNumber = Math.floor(Math.random() * 100 + 1);
let attempt = 0;
while (true) {
  let userGuess = Number(prompt('Enter your guess: '));
  attempt++;
  if (userGuess < 0 || userGuess > 100 || isNaN(userGuess)) {
    console.log('Please enter a valid number (1-100)');
  } else if (userGuess < randomNumber) {
    console.log('Your guess is less than random number! 🔽');
  } else if (userGuess > randomNumber) {
    console.log('Your guess is greater than random number! 🔼');
  } else if (userGuess === randomNumber) {
    console.log('You nailed it! 💥');
    break;
  }
}
console.log(`Your total attempt is: ${attempt}`);
console.log(`Your score is ${100 - attempt} 🟢`);
