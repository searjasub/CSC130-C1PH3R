
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var fullAlphabet = alphabet + alphabet + alphabet;


function runCipher() {
  var cipherText = $("#chypher").val();
  var cipherOffset = $("#offset").val();
  cipherOffset = (cipherOffset % alphabet.length);
  var cipherFinish = '';

  for(i = 0; i < cipherText.length; i++) {
     var letter = cipherText[i];
     var upper = (letter == letter.toUpperCase());
     letter = letter.toLowerCase();
    
     var index = alphabet.indexOf(letter);
     if(index == -1) {
       cipherFinish += letter;
     } else {
       index = ((index + cipherOffset) + alphabet.length);
       var nextLetter = fullAlphabet[index];
       if(upper) {
        nextLetter = nextLetter.toUpperCase();
        cipherFinish += nextLetter;
       } 
     }
  }
    
  $("#finish").val(cipherFinish);
}

$(document).ready(function() {
  $('#cypher').keypress(function(){
    setTimeout(function(){ runCipher(); },20);
  });
  $('#cypher').blur(function(){
    runCipher();
  });
  $('#offset').change(function(){
    setTimeout(runCipher(),20);
  });
  
});

// const helpButt = document.getElementById("help");
// helpButt.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     const text = "The Caesar cipher is one of the earliest known and simplest ciphers. It is a type of substitution cipher in which each letter in the plaintext is 'shifted' a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on. The method is named after Julius Caesar, who apparently used it to communicate with his generals.";

    
// });