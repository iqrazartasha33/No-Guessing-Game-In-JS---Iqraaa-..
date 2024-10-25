const correctNumber = 7; 

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const resultMessage = document.getElementById("resultMessage");

    if (userGuess === correctNumber) {
        resultMessage.textContent = "Congratulations! You guessed the correct number!";
    } else {
        resultMessage.textContent = "Sorry, that's not correct. Try again!";
    }
}
