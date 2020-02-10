function AtbashEncode(str) {
    var encodedStr;
    for (var i = 0; i < str.length; i++) {
        var diff = (((str.charCodeAt(i) - 65) * 2) - 25);
        encodedStr.charAt(i) = String.fromCharCode(str.charCodeAt(i) + diff);
    }
    return encodedStr;
}

function AtbashDecode(str) {
    var decodedStr;
    for (var i = 0; i < str.length; i++) {
        var diff = Math.abs(((Math.abs(str.charAt(i) - 90) * 2) - 25))
        decodedStr.charAt(i) = String.fromCharCode(str.charCodeAt(i) - diff);
    }
    return decodedStr;
}