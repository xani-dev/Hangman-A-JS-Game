# A JS Hangman Game 🕹️
A fun mini Javascript project. 

This project was built purely with JS. 

## What it does?: 
1. Picks a random word.
2. Takes the player’s guess.
3. Checks that the player’s guess is a valid letter.
4. Keeps track of letters the player has guessed.
5. Shows the player their progress.
6. Finishes when the player has guessed the word. 

![Hangman Game Demo](https://test.gif)

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
In order to run this project, you 

## Future improvements: 

- [x] Add some Styles


## License information: 

[MIT](https://choosealicense.com/licenses/mit/)
