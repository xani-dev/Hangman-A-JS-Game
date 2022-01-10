
function pickWord() {
    // Return a random word
    var words = [
      "entry",
      "owner",
      "bonus",
      "video",
      "unit",
      "love",
      "piano",
      "virus",
      "food",
      "wife",
      "soup",
      "movie",
      "computer",
      "scene",
      "mode",
      "army",
      "cell",
      "power",
      "exam",
      "coding",
      "cheek",
      "news",
      "developer",
      "buyer",
      "uncle",
      "skill",
      "media",
      "child",
      "disk",
      "music",
      "success",
      "world",
      "data",
      "girl",
      "bread",
      "hall",
      "ratio",
      "oven",
      "coffee",
      "beer",
      "fact",
      "hair",
      "union",
      "queen",
      "user",
      "mood",
    ];
    return words[Math.floor(Math.random() * words.length)];
  }
  
  function setupAnswerArray(word) {
    // Return the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    drawUnderscores(word.length);
    return answerArray;
  }
  
  
 
function restart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    word = pickWord();
    console.log(word);
    answerArray = setupAnswerArray(word);
    remainingLetters = word.length;
    incorrectGuesses = 0;
    userGuess.disabled = false;
    lettersGuessed = [];
  }
  
  function promptLost(answerWord){
    alert("You lost! :( The answer was " + answerWord.toLowerCase() );
    restart(); 
  }
  
  function updateGameState(guess, word, answerArray) {
    // Update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
    var timesInWord = 0;
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase()) {
        answerArray[j] = guess;
        drawCorrectGuess(guess, j);
        console.log("printing correct guess")
        timesInWord++; 
      } 
    }
    return timesInWord;
  }
  
  function showAnswerAndCongratulatePlayer(answerArray) {
    // Use alert to show the answer and congratulate the player
    alert("Great job, you won! The answer was " + answerArray.join("").toLowerCase());
    restart(); 
  }
  