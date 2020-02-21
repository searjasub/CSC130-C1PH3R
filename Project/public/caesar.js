const alphabet = "abcdefghijklmnopqrstuvwxyz";
const fullAlphabet = alphabet + alphabet + alphabet;
const alphabet2 = "zyxwvutsrqponmlkjihgfedcba";

const encripB = document.getElementById("encrip");
encripB.addEventListener("click", function(evt) {
  evt.preventDefault();
  document.getElementById("bottom-cipher").value = '';

  const encripChipher = document.getElementById("decipher_caesar_text").value;
  const offset = document.getElementById("offset").value;

  for(i = 0; i < encripChipher.length; i++) {
    const letters = encripChipher[i];
    const position = alphabet.indexOf(letters);

    if(position == -1) {
      document.getElementById("bottom-cipher").value += letters;
    } else {
      const nextPosition = position + offset % 26;
      const nextLetter = fullAlphabet[nextPosition];

      document.getElementById("bottom-cipher").value += nextLetter;
    }
   }
});

const decryptB = document.getElementById('decrypt');
decryptB.addEventListener("click", function(evt) {
  evt.preventDefault();
  document.getElementById("decipher_caesar_text").value = '';

  const decryptCipher = document.getElementById("bottom-cipher").value;
  const set = document.getElementById("offset").value;

  for(i = 0; i < decryptCipher.length; i++) {
    const letter = decryptCipher[i];
    const index = alphabet.indexOf(letter);
  
    if(index <= -1) {
      document.getElementById("decipher_caesar_text").value += letter;
    } else {
      const nextIndex = index - set % 26;
      const nextLetters = fullAlphabet[nextIndex];

      document.getElementById("decipher_caesar_text").value += nextLetters;
    }
  }
});

const helpB = document.getElementById('help');
helpB.addEventListener("click", function(evt) {
  evt.preventDefault();

  alert("On the first line you must put the message you want to decrypt and on the second line, you must put the number for what you want the message to be filtered and on the third line the new message will appear.");
});

console.log(helpB);

// console.log(encripB)
// console.log(decryptB)