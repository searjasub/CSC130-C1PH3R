let keyword = "keyword";
let count;
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let usedLetters = [];
//let lowAlphabet =["a", "b", "c", "d", "e","f","g","h","i","k"];
let secretMsg;
let Grid = [];
let replaceWithX;

//saves the default keyword as 'keyword'

console.log("test");

//find the ascii keys in the keyword and to remove them from this string
//remove j
function fillGrid(){

    for(let i = 0; i < keyword.length; i++){
        for (let l = alphabet.length; l > 0 ; l--){
            if (alphabet[l] === keyword[i]){
                alphabet.splice(alphabet.indexOf(alphabet[l]), 1);
                break;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        Grid[i] = [];
        for(let k = 0; k < 5; k++){
            Grid[i][k] = undefined;
        }
    }

    keyword =  keyword.split('');
    for(let j = 0; j < keyword.length; j++){//the rows
        //array 1
        for (let l = 0; l < keyword.length; l++){//the columns
            if (count < keyword.length){
                Grid[j][l] = keyword[l];
                //usedLetters.push(keyword[l]);
                //array 2
                //loops for keyword.length times
                //loops back
                //increments j
                count++;
            } else if (count > keyword.length){
                Grid[j][l] = alphabet[keyword.length - count];
            }


        }

    }
}
function Encrypt(){

    secretMsg = document.getElementById("encrypt").value;
    let lettersUsedOnce;
    //have to read the secret msg and replace letters that have been used with a X
    secretMsg.split("^([a-zA-z]{2})");


    for (let i = 0; i < secretMsg.length; i++){


        lettersUsedOnce.add(i);
        /*
        if (){

        }
         */

    }



}

