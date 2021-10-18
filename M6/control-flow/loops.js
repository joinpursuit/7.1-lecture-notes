// While loop for when you don't know how many times the code will be looping]
const passphrase = "Open Sesame!1";

const geussPW = (passphrase) => {
  let pw = prompt("Enter password...or else!");

  // while loop specificies a condition which until false continues executing the loop
  while (pw !== passphrase) {
    pw = prompt("No! Try again.. you must....");
  }

  alert("Great job!");
};

// For loop when you know exactly how many times the code should loop

const guessLimit = 3;

const geussPWLimited = (passphrase, geussLimit) => {
  let access = false;

  for (let i = guessLimit; i >= 1; i--) {
    let pw = prompt("Enter password...or else!");

    if (pw === passphrase) {
      access = true;
      break;
    }

    if (i === 3) {
      alert("YOu have 2 guesses left!");
    } else if (i === 2) {
      alert("YOu have 1 guesses left!");
    }
  }

  if (access === true) {
    alert("Congrats! you may access now...");
  } else {
    alert("sorry, you had you shot and didn't get access");
  }
};

// For Each loop when you have a list of elements and you want to look each, or be able to look at each exactly once
// For I in X
