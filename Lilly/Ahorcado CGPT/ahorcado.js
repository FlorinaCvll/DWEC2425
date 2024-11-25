const words = ['javascript', 'css', 'html', 'developer', 'frontend'];
let chosenWord = '';
let guessedLetters = [];
let remainingAttempts = 6;

function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingAttempts = 6;
    document.getElementById('status').textContent = '';
    displayWord();
    createLetters();
}

function displayWord() {
    const wordContainer = document.getElementById('word');
    wordContainer.innerHTML = chosenWord
        .split('')
        .map(letter => guessedLetters.includes(letter) ? letter : '_')
        .join(' ');
}

function createLetters() {
    const lettersContainer = document.getElementById('letters');
    lettersContainer.innerHTML = '';
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(letter => {
        const letterButton = document.createElement('span');
        letterButton.textContent = letter;
        letterButton.className = 'letter';
        letterButton.onclick = () => guessLetter(letter);
        lettersContainer.appendChild(letterButton);
    });
}

function guessLetter(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!chosenWord.includes(letter)) {
            remainingAttempts--;
        }
        updateGameState();
    }
}

function updateGameState() {
    displayWord();
    document.getElementById('status').textContent = `Intentos restantes: ${remainingAttempts}`;

    if (remainingAttempts === 0) {
        document.getElementById('status').textContent = '¡Perdiste! La palabra era: ' + chosenWord;
    } else if (!document.getElementById('word').textContent.includes('_')) {
        document.getElementById('status').textContent = '¡Ganaste!';
    }
}

document.addEventListener('DOMContentLoaded', startGame);
