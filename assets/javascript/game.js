// Table array for word guesses//
var keyWords = ["stark", "banner", "thor", "rodgers", "groot", "parker", "vision", "fury", "avengers", "marvel", "barton", "romanoff", "barnes", "loki", "quill", "gamora", "rocket", "drax", "wanda", "ultron", "thanos", "lang", "hope", "strange"];
console.log(keyWords);

//variables
var wordLength
var wins = 0
var losses = 0
var guesses = 7

// function chooses random work for the game from the table.//
var wordChosen = keyWords[Math.floor(Math.random() * keyWords.length < 25)];
    console.log(wordChosen);
    

// This function logs when the user presses a letter//
document.onkeypress = function(event) {
    console.log(var userGuess = event.key);
    console.log(document.textContent = wordChosen);
    
//This function splits the wordChosen and then replaces it with an "_"    
    console.log(document.wordChosenlength = wordLength);
    for (var i = 0; i < wordLength; i++) {
       var splitword = wordChosen.split("");
       console.log(splitword);
 
 // condition to match the letter typed to any of the letters of the random word & trigger alert based on conditions
       
        if (userGuess === splitword) {
            wins++;
            message = messageWin;
           } else if (userGuess != splitword) {
            message = messageWarn;
           } else {
            lose++;
            message = messageLose;
           }   
            
            
        
            

    }       
}





