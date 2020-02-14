var activeButton = 0;
var list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function swap(str, pStr) {
    str.ToUpperCase();
    pStr.ToUpperCase();
    var i = 0;
    var err = 0;
    var val = 0;
    var cStr = [];
    if (str.length !== 0 && pStr.length !== 0) {
      if (str.length > pStr.length)
        err = 1;
      else {
        val = 1;
        while (i < str.length && val) {
          if (str[i] === undefined || pStr[i] === undefined)
            val = 0;
          else {
            if (activeButton === 0)
              cStr[i] = encrypt(str[i], pStr[i]);
            else
              cStr[i] = decrypt(str[i], pStr[i]);
            i++;
          }
        }
      }
    }
    if (err)
      p1.textContent = "¡Key length must be greater or equal than the message length!";
    else if (!val)
      p1.textContent = "Introduce only valid characters";
    else
      p1.innerHTML = "Ciphered Message: " + cStr.join("");
  }

  function encrypt(msgChar, keyChar) {
    var msgChar_pos;
    var keyChar_pos;
    var res;
    for (i = 0; i < list.length; i++) {
      if (list[i] == msgChar)
        msgChar_pos = i;
      if (list[i] == keyChar)
        keyChar_pos = i;
    }
    res = msgChar_pos + keyChar_pos;
    return list[res % list.length];
  }

  function decrypt(enChar, keyChar) {
    var enChar_pos;
    var keyChar_pos;
    var res;
    for (i = 0; i < list.length; i++) {
      if (list[i] == enChar)
        enChar_pos = i;
      if (list[i] == keyChar)
        keyChar_pos = i;
    }
    res = enChar_pos - keyChar_pos;
    if (res < 0)
      res += list.length;
    return list[res % list.length];
  }