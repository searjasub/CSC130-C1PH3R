var answer;
var score;
var strikes;
var currentQuestion;
var questions = new Map([
    ["dGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw==", "Base64"],
    ["gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt", "Atbash"],
    ["god yzal eht revo spmuj xof nworb kciuq eht", "Rotate"],
    ["- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.", "Morse"],
    ["gur dhvpx oebja sbk whzcf bire gur ynml qbt", "ROT13"]
]);
var keys = Array.from(questions.keys());

function start() {
    score = 0;
    strikes = 0;
    changeQuestion();
}

function changeQuestion() {
    document.getElementById("score").innerHTML = score;
    currentQuestion = keys[Math.floor(Math.random() * Math.floor(4))];
    document.getElementById("question text").innerHTML = currentQuestion;
    answer = questions.get(currentQuestion);
}

function guess() {
    str = document.getElementById("guessInput").value;
    if (str === answer) {
        score++;
        alert("Correct");
        changeQuestion();
    } else if (strikes > 1) {
        alert("You're out of tries")
        start();
    } else {
        strikes++;
        document.getElementById("tries").innerHTML = 3 - strikes;
    }
}