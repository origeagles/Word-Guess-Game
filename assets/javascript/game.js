// Table array for word guesses//
var keyWords = ["stark", "banner", "thor", "rodgers", "groot", "parker", "vision", "fury", "avengers", "marvel", "barton", "romanoff", "barnes", "loki", "quill", "gamora", "rocket", "drax", "groot", "wanda", "ultron", "thanos", "lang", "hope", "strange", "tchalla"];

// function chooses random work for the game from the table.//
var wordChosen = keyWords[Math.floor(Math.random() * keyWords.length)];
    console.log(wordChosen)

// This function logs when the user presses a letter//
document.onkeypress = function(event) {
    console.log(userGuess = event.key);

}
