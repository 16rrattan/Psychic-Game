var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wincounter = 0;
var losecounter = 0;
var guesses = 10;
var userinput = "";
var array = [];
var randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomletter);

document.getElementById("HtmlWins").innerHTML = wincounter;
document.getElementById("HtmlLosses").innerHTML = losecounter;
document.getElementById("HtmlGuesses").innerHTML = guesses;

document.onkeyup = function(event) {
    var userinput = event.key;
    console.log(userinput);



    if (userinput == window.randomletter || userinput == '?') {
        wincounter++;
        document.getElementById("HtmlWins").innerHTML = wincounter;
        window.randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(window.randomletter);
        guesses = 10;
        document.getElementById("HtmlGuesses").innerHTML = guesses;
        array = [];
        document.getElementById("Htmlarray").innerHTML = array;
    } else {
        guesses--;
        array.push(userinput + " ");
        document.getElementById("Htmlarray").innerHTML = array;
        document.getElementById("HtmlGuesses").innerHTML = guesses;
        console.log("the ansr is " + window.randomletter);
    }
    if (guesses === 0) {
        losecounter++;
        guesses = 10;
        document.getElementById("HtmlGuesses").innerHTML = guesses;
        document.getElementById("HtmlLosses").innerHTML = losecounter;
        array = [];
        document.getElementById("Htmlarray").innerHTML = array;
        console.log(guesses);
        console.log("lose");
    }
};



// 'b', 'c', 'd', 'e', 'f'