var score;
var currentAnswer;
var currentQuestion;
var currentUnencrypt;
var currentEncrypter;
var unencryptStr = ["The quick brown fox jumps over the lazy dog", "Attack at dawn", "This is a crypt", "Hello World"];
var encrypters = ["Atbash", "ROT13", "Caesar"];

function start() {
    score = 0;
    changeQuestion();
}


function changeQuestion() {
    currentEncrypter = encrypters[Math.floor(Math.random() * 3)];
    currentUnencrypt = unencryptStr[Math.floor(Math.random() * 4)];
    console.log(currentEncrypter);
    console.log(currentUnencrypt);
    switch (currentEncrypter) {
        case "Atbash":
            currentQuestion = atbashencrypt(currentUnencrypt);
            break;
        case "ROT13":
            currentQuestion = rot13encrypt(currentUnencrypt);
            break;
        case "Caesar":
            currentQuestion = caesarencrypt(currentUnencrypt, 10);
            break;
    }
    answer = currentEncrypter;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("unencryptStr").innerHTML = "PlainText: " + currentUnencrypt;
    document.getElementById("question text").innerHTML = "Encrypted: " + currentQuestion;
}

function guess() {
    str = document.getElementById("guessInput").value;
    if (str === answer) {
        score++;
        alert("Correct");
        changeQuestion();
    }
}

function atbashencrypt(str) {
    str = str.toLowerCase();
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            let diff = str.charCodeAt(i) - 97;
            result += String.fromCharCode(122 - diff);
        } else {
            result += str[i];
        }
    }
    return result;
}

function rot13encrypt(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let Alphabet2 = alphabet + alphabet + alphabet;
    const offset = 13;
    let result = "";
    for (i = 0; i < str.length; i++) {
        const letters = str[i];
        const position = alphabet.indexOf(letters);

        if (position == -1) {
            result += letters;
        } else {
            const nextPosition = position + offset % 26;
            const nextLetter = Alphabet2[nextPosition];

            result += nextLetter;
        }
    }
    return result;
}

function caesarencrypt(str, offset) {
    let result = "";
    console.log(offset);
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let fullAlphabet = alphabet + alphabet + alphabet;
    for (i = 0; i < str.length; i++) {
        const letters = str[i];
        const position = alphabet.indexOf(letters);

        if (position == -1) {
            result += letters;
        } else {
            const nextPosition = position + offset % 26;
            const nextLetter = fullAlphabet[nextPosition];
            result += nextLetter;
        }
    }
    return result;
}