const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var userGuess = document.getElementById("userGuess");
var word = pickWord();
console.log(word);
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var incorrectGuesses = 0;

var lettersGuessed = [];

function getGuess() {
  // Use prompt to get a guess
  var guess = userGuess.value;
  //console.log(guess.length);

  if (guess.length > 0) {
    //console.log("Input");

    if (!lettersGuessed.includes(guess)) {
      lettersGuessed.push(guess);
      console.log(lettersGuessed);

      var correctGuesses = updateGameState(guess, word, answerArray);
      remainingLetters -= correctGuesses;
      if (remainingLetters === 0) {
        setTimeout(showAnswerAndCongratulatePlayer,100, answerArray);
      }

      if (correctGuesses === 0) {
        drawSegment(incorrectGuesses);
        drawIncorrectGuess(guess, incorrectGuesses);
        incorrectGuesses++;
      }

      console.log(incorrectGuesses);
      if (incorrectGuesses == 6) {
        userGuess.disabled = true;
        setTimeout(promptLost, 100, word);
      }
      userGuess.value = "";
    } else {
      alert("Letter already guessed")
      userGuess.value = "";
    }
  }
}

//See challenges, limiting guesses and Fixing a Bug
