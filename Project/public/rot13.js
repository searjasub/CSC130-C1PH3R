const alphabet = "abcdefghijklmnopqrstuvwxyz";
const Alphabet2 = alphabet + alphabet + alphabet;

const encryptB = document.getElementById("encrypt" );

encryptB.addEventListener("click", function (evn) {
    evn.preventDefault();

    const encriptCipher = document.getElementById("rot13_text").value;
    const offset = 13;

    for (i =0; i < encriptCipher.length; i++ ){
        const letters = encriptCipher[i];
        const position = alphabet.indexOf(letters);

        if (position == -1){
            document.getElementById("Rot13_cipher").value += letters;
        } else {
            const nextPosition =  position + offset % 26;
            const nextLetter =  Alphabet2[nextPosition];

            document.getElementById("Rot13_cipher").value += nextLetter;
        }
    }
});

const decryptB = document.getElementById("decrypt");
decryptB.addEventListener("click", function (evn) {
    evn.preventDefault();
    document.getElementById("rot13_text").value = '';
    const decryptCipher = document.getElementById("Rot13_cipher").value;
    const set = 13;

    for (i = 0; i < decryptCipher.length; i++){
        const letter = decryptCipher[i];
        const indexOfLetter = alphabet.indexOf(letter);

        if (indexOfLetter <= -1){
            document.getElementById("rot13_text").value += letter;

        } else {
            const nextIndex = indexOfLetter - set % 26;
            const nextLetters = Alphabet2[nextIndex];

            document.getElementById("rot13_text").value += nextLetters;
        }
    }

});

const saveB = document.getElementById("saveBtn");
saveB.addEventListener("click", function(evt) {
    evt.preventDefault();

    const encryptText = document.getElementById("rot13_text").value;
    const offSet = 13;
    const decryptText = document.getElementById("Rot13_cipher").value;

    let data = 'Plain Text: ' + encryptText + ' \r\n' +
        'Offset: ' + offSet + ' \r\n' +
        'Coded Text: ' + decryptText;

    // const path = 'OffsetFiles/EncryptFiles/' + offSet + '.txt';
    const my_file = new Blob([data], { type: "text/plain;charset=utf-8" });
    const fileName = 'C1PH3R-with-off-set-' +offSet +'.txt';

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
