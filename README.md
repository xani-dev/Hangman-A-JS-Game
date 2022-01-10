# A JS Hangman Game 🕹️
A fun mini Javascript project. 

This project was built purely with JS. 

# Demo
![Hangman Game Demo](https://user-images.githubusercontent.com/71361700/148828144-2b6dcaae-2cad-4ac7-8e90-f8a2d9c58ef9.gif)

## What it does?: 
1. Picks a random word.
2. Takes the player’s guess.
3. Checks that the player’s guess is a valid letter.
4. Keeps track of letters the player has guessed.
5. Shows the player their progress.
6. Finishes when the player has guessed the word. 

### Pseudocode:
```javascript
Pick a random word
while the word has not been guessed {
    Show the player their current progress
    Get a guess from the player

    if the player wants to quit the game {
    Quit the game
} else if the guess is not a single letter {
    Tell the player to pick a single letter
} else {
    if the guess belongs to the word {
    Update the progress 
        }
    }
}

Congratulate the player on guessing the word
```
## How to Run: 
In order to run this project, you may use your local server or mount it with Create React App.

## Future improvements: 

- [x] Add some Styles


## License information: 

[MIT](https://choosealicense.com/licenses/mit/)
