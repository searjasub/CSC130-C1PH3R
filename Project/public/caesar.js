const alphabet = "abcdefghijklmnopqrstuvwxyz";
const fullAlphabet = alphabet + alphabet + alphabet;


const encripB = document.getElementById("encrypt");
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


const saveB = document.getElementById("save");
saveB.addEventListener("click", function(evt) {
  evt.preventDefault();

  const encryptText = document.getElementById("decipher_caesar_text").value;
  const offSet = document.getElementById("offset").value;
  const decryptText = document.getElementById("bottom-cipher").value;

  let data = 'Plain Text: ' + encryptText + ' \r\n' + 
  'Offset: ' + offSet + ' \r\n' + 
  'Coded Text: ' + decryptText;

  // const path = 'OffsetFiles/EncryptFiles/' + offSet + '.txt';
  const my_file = new Blob([data], { type: "text/plain;charset=utf-8" });
  const fileName = offSet + '.txt';	 

  let newLink = document.createElement("a");

  newLink.download = fileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(my_file);
  }
  else {
    newLink.href = window.URL.createObjectURL(my_file);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }
  newLink.click();
});
