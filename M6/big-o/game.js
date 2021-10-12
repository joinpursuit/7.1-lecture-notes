const game = () => {
  const limit = 100;
  let number = Math.ceil(Math.random() * limit);
  let guess = prompt(`Guess a number between 1 and ${limit}`);

  guess = Number(guess);

  while (guess !== number) {
    if (guess < number) {
      guess = prompt(`Too low! Guess again`);
    } else {
      guess = prompt(`Too high! Guess again`);
    }
    guess = Number(guess);
  }
  alert(`That's right! The number was ${number}`);
};

game();
