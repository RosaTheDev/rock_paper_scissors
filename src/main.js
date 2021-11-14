var game = new Game()
var humanPlayer = new Player('richard');
var computerPlayer = new Player('AI');
game.retrieveWins();

// Query Selectors!  👇🏾
 var rock = document.querySelector('.rock');
 var paper = document.querySelector('.paper');
 var scissors = document.querySelector('.scissors');
 var humanScores = document.querySelector('.human-score');
 var computerScores = document.querySelector('.computer-score');
//  var classic = document.querySelector(.)

// Event listeners! 👇🏾
var clickedRock = rock.addEventListener('click', grabTargetId);
var clickedPaper = paper.addEventListener('click', grabTargetId);
var clickedScissors = scissors.addEventListener('click', grabTargetId);

// inner HTML

//event listener to classixBox.addEventListener('click', startGame); 
// function startGame() {
// where we want our hide/display   var humanPlayer = new Player();
// human player created    var computerPlayer = new Player();
// -- computer already chooses which version to play computerPlayer.makeChoice()
// create  instance game class which passes in the players as arguments var game = new Game(computerPlayer, humanPlayer)
//computer player to be created
//}



/// on load function instatiate the class
/// look at how I am adding to the win chart 
/// what benefit am I getting 
// Functions 👇🏾
   function grabTargetId(event) {
        game.gameRules();
        iconTarget = Number(event.target.id)
        humanPlayer.choice = iconTarget;
        computerPlayer.makeChoice();
        game.savedWins();
     

        humanScores.innerText = `Score: ${humanPlayer.wins}`
        computerScores.innerText = `Score: ${computerPlayer.wins}`
    
    };
