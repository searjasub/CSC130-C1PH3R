module.exports = {
    encrypt: function(str) {
        var encodedStr = "";
        for (var i = 0; i < str.length; i++) {
            var diff = str.charCodeAt(i) - 97;
            encodedStr += String.fromCharCode(122 - diff);
        }
        return encodedStr;
    },

    decrypt: function(str) {
        var decodedStr = "";
        for (var i = 0; i < str.length; i++) {
            var diff = str.charCodeAt(i) - 97;
            decodedStr += String.fromCharCode(122 - diff);
        }
        return decodedStr;
    }
};