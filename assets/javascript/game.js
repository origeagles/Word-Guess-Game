// Table array for word guesses//
var keyWords = ["stark", "banner", "thor", "rodgers", "groot", "parker", "vision", "fury", "avengers", "marvel", "barton", "romanoff", "barnes", "loki", "quill", "gamora", "rocket", "drax", "wanda", "ultron", "thanos", "lang", "hope", "strange"];
console.log(keyWords);

//variables
var wordLength
var wins = 0
var losses = 0
var guesses = 7

// function chooses random work for the game from the table.//
var wordChosen = keyWords[Math.floor(Math.random() * keyWords.length-1)];
    console.log(wordChosen);
    

// This function logs when the user presses a letter//
document.onkeypress = function(event) {
    console.log(document.userGuess = event.key);
    document.textContent = wordChosen;
    
//This function splits and wordChosen and the replaces it with an "_"    
    console.log(document.stringlength(wordChosen) = wordLength);
    for (var i = 0; i < wordLength; i++) {
    }       
}

// condition to match the letter typed to any of the letters of the random word
var splitword = wordChosen.split("_");
console.log(splitword);


