// Table array for word guesses//
var keyWords = ["stark", "banner", "thor", "rodgers", "groot", "parker", "vision", "fury", "avengers", "marvel", "barton", "romanoff", "barnes", "loki", "quill", "gamora", "rocket", "drax", "groot", "wanda", "ultron", "thanos", "lang", "hope", "strange", "tchalla"];

//variables
var wins = 0
var losses = 0
var guesses = 7

// function chooses random work for the game from the table.//
var wordChosen = keyWords[Math.floor(Math.random() * keyWords.length-1)];
    console.log(wordChosen);

// This function logs when the user presses a letter//
document.onkeypress = function(event) {
    console.log(userGuess = event.key);
    document.textContent = wordChosen;
    document.txtlength = wordChosenInvisible;
    for (var 1 = 0; i < wordChosenInvisible; i++) {
    console.log(document.textContent = "_");
    }
        
}
