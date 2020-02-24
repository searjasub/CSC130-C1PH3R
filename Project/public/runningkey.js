const list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const encryptBtn = document.getElementById("encrypt");

encryptBtn.addEventListener("click", function (evt) {
    evt.preventDefault();

    let plainTextLength = document.getElementById('runningText').value.length;
    let keyLength = document.getElementById('key').value.length;
    let finalResult = [];


    if (plainTextLength > keyLength) {
        //text is longer == we need to repeat
        let finalKey = "";
        let wholeCounter = plainTextLength / keyLength;
        let remainder = plainTextLength % keyLength;

        for (let i = 0; i < wholeCounter; i++) {
            finalKey += document.getElementById('key').value;
        }
        for (let i = 0; i < remainder; i++) {
            finalKey += document.getElementById('key').value[i];
        }

        for (let i = 0; i < plainTextLength; i++) {
            finalResult[i] = encrypt(document.getElementById('runningText').value[i], finalKey[i])
        }
    } else {
        let choppedKey = document.getElementById('key').value.substr(0, plainTextLength);
        for (let i = 0; i < plainTextLength; i++) {
            finalResult[i] = encrypt(document.getElementById('runningText').value[i], choppedKey[i])
        }
    }

    function encrypt(msgChar, keyChar) {
        let msgChar_pos;
        let keyChar_pos;
        let res;
        for (let i = 0; i < list.length; i++) {
            if (list[i] === msgChar)
                msgChar_pos = i;
            if (list[i] === keyChar)
                keyChar_pos = i;
        }
        res = msgChar_pos + keyChar_pos;
        return list[res % list.length];
    }

    document.getElementById('bottom-cipher').value = finalResult.join("");
});


const decryptBtn = document.getElementById("decrypt");
decryptBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    let keyText = document.getElementById('key').value;
    let plainTextLength = document.getElementById('bottom-cipher').value.length;
    let keyLength = keyText.length;
    let finalResult = [];

    if (plainTextLength > keyLength) {
        //text is longer == we need to repeat
        let finalKey = "";
        let wholeCounter = plainTextLength / keyLength;
        let remainder = plainTextLength % keyLength;

        for (let i = 0; i < wholeCounter; i++) {
            finalKey += keyText;
        }
        for (let i = 0; i < remainder; i++) {
            finalKey += keyText[i];
        }

        for (let i = 0; i < plainTextLength; i++) {
            finalResult[i] = decrypt(document.getElementById('bottom-cipher').value[i], keyText[i])
        }
    } else {
        let choppedKey = keyText.substr(0, plainTextLength);
        for (let i = 0; i < plainTextLength; i++) {
            finalResult[i] = decrypt(document.getElementById('bottom-cipher').value[i], choppedKey[i])
        }
    }

    function decrypt(msgChar, keyChar) {
        let enChar_pos;
        let keyChar_pos;
        let res;
        for (let i = 0; i < list.length; i++) {
            if (list[i] === msgChar)
                enChar_pos = i;
            if (list[i] === keyChar)
                keyChar_pos = i;
        }
        res = enChar_pos - keyChar_pos;
        if (res < 0)
            res += list.length;
        return list[res % list.length];
    }

    document.getElementById('runningText').value = finalResult.join("");
});

const saveB = document.getElementById("saveBtn");
saveB.addEventListener("click", function(evt) {
  evt.preventDefault();

  const encryptText = document.getElementById("runningText").value;
  const key = document.getElementById("key").value;
  const decryptText = document.getElementById("bottom-cipher").value;

  let data = 'Plain Text: ' + encryptText + ' \r\n' + 
  'Key: ' + key + ' \r\n' + 
  'Coded Text: ' + decryptText;

  // const path = 'OffsetFiles/EncryptFiles/' + offSet + '.txt';
  const my_file = new Blob([data], { type: "text/plain;charset=utf-8" });
  const fileName = key + '.txt';	 

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