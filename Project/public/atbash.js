module.exports = {
    encrypt: function(str) {
        var encodedStr = "";
        for (var i = 0; i < str.length; i++) {
            if (str[i] != ' ') {
                var diff = str.charCodeAt(i) - 97;
                encodedStr += String.fromCharCode(122 - diff);
            } else {
                encodedStr += str[i];
            }
        }
        return encodedStr;
    },

    decrypt: function(str) {
        var decodedStr = "";
        for (var i = 0; i < str.length; i++) {
            if (str[i] != ' ') {
                var diff = str.charCodeAt(i) - 97;
                decodedStr += String.fromCharCode(122 - diff);
            } else {
                decodedStr += str[i];
            }
        }
        return decodedStr;
    }
};

const saveB = document.getElementById("saveBtn");
saveB.addEventListener("click", function(evt) {
    evt.preventDefault();

    const encryptText = document.getElementById("decipher_caesar_text").value;
    const decryptText = document.getElementById("bottom-cipher").value;

    let data = 'Plain Text: ' + encryptText + ' \r\n' +
        'Coded Text: ' + decryptText;

    // const path = 'OffsetFiles/EncryptFiles/' + offSet + '.txt';
    const my_file = new Blob([data], { type: "text/plain;charset=utf-8" });
    const fileName = decryptText + '.txt';

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