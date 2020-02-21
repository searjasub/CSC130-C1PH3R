module.exports = {
    encrypt: function (msgText, keyText) {
        let list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        let plainTextLength = msgText.length;
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
                finalResult[i] = encrypt(msgText[i], finalKey[i])
            }
        } else {
            let choppedKey = keyText.substr(0, plainTextLength);
            for (let i = 0; i < plainTextLength; i++) {
                finalResult[i] = encrypt(msgText[i], choppedKey[i])
            }
        }

        function encrypt(msgChar, keyChar) {
            var msgChar_pos;
            var keyChar_pos;
            var res;
            for (i = 0; i < list.length; i++) {
                if (list[i] === msgChar)
                    msgChar_pos = i;
                if (list[i] === keyChar)
                    keyChar_pos = i;
            }
            res = msgChar_pos + keyChar_pos;
            return list[res % list.length];
        }

        return finalResult.join("");
    },

    decrypt: function (msgText, keyText) {
      let list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      let plainTextLength = msgText.length;
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
                finalResult[i] = decrypt(msgText[i], keyText[i])
            }
        } else {
            let choppedKey = keyText.substr(0, plainTextLength);
            for (let i = 0; i < plainTextLength; i++) {
                finalResult[i] = decrypt(msgText[i], choppedKey[i])
            }
        }

        function decrypt(msgChar, keyChar) {
            let enChar_pos;
            let keyChar_pos;
            let res;
            for (i = 0; i < list.length; i++) {
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

        return finalResult.join("");
    }
};