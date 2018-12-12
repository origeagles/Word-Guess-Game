// Table array for word guesses//
var keyWords = ["stark", "banner", "thor", "rodgers", "groot", "parker", "vision", "fury", "avengers", "marvel", "barton", "romanoff", "barnes", "loki", "quill", "gamora", "rocket", "drax", "wanda", "ultron", "thanos", "lang", "hope", "strange", "tchalla"];

//variables
var wordLength
var wins = 0
var losses = 0
var guesses = 7

// function chooses random work for the game from the table.//
var wordChosen = keyWords[Math.floor(Math.random() * keyWords.length-1)];
    console.log(wordChosen);
    console.log([25]);

// This function logs when the user presses a letter//
document.onkeypress = function(event) {
    console.log(userGuess = event.key);
    document.textContent = wordChosen;
    console.log(document.stringlength(wordChosen) = wordLength);
    for (var i = 0; i < wordLength; i++) {
    console.log(document.textContent = "_");
    }       
}

// condition to match the letter typed to any of the letters of the random word
var splitword = wordChosen.split(" ");
console.log(splitword);


