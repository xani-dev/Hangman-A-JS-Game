
function drawSegment(incorrectGuesses) {
    ctx.lineWidth = 2;
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "white"
  
    if (incorrectGuesses === 0) {
      ctx.strokeRect(20, 20, 20, 20);
    } else if (incorrectGuesses === 1) {
      ctx.beginPath();
      ctx.moveTo(30, 40);
      ctx.lineTo(30, 80);
      ctx.stroke();
    } else if (incorrectGuesses === 2) {
      ctx.beginPath();
      ctx.moveTo(30, 80);
      ctx.lineTo(10, 110);
      ctx.stroke();
    } else if (incorrectGuesses === 3) {
      ctx.beginPath();
      ctx.moveTo(30, 80);
      ctx.lineTo(50, 110);
      ctx.stroke();
    } else if (incorrectGuesses === 4) {
      ctx.beginPath();
      ctx.moveTo(30, 60);
      ctx.lineTo(10, 50);
      ctx.stroke();
    } else if (incorrectGuesses === 5) {
      ctx.beginPath();
      ctx.moveTo(30, 60);
      ctx.lineTo(50, 50);
      ctx.stroke();
    }
    
  }
  
  // Draw the underscores for the guesses
  var drawUnderscores = function (howMany) {
    ctx.lineWidth = 2;
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "white"
    ctx.beginPath();
    
  
    for (var i = 0; i < howMany; i++) {
      ctx.moveTo((i * 60) + 10, 260);
      ctx.lineTo((i * 60) + 40, 260);
    }
  
    ctx.stroke();
  };
  
  // Draw the correct guess in the appropriate position
  var drawCorrectGuess = function (guess, index) {
    ctx.font = "20px Comfortaa";
    ctx.fillText(guess.toUpperCase(), (index * 60) + 10, 250);
  };
  
  // Draw the incorrect guess with a line through it in the appropriate position
  var drawIncorrectGuess = function (guess, index) {
    console.log("The Wrong letter is: " + guess)
    ctx.font = "20px Comfortaa";
    ctx.fillText(guess.toUpperCase(), 250, (index * 20) + 40);
    ctx.moveTo(250, (index * 20) + 30);
    ctx.lineTo(270, (index * 20) + 30);
    ctx.stroke();
  };
  