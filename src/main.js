var game = new Game()
// Query Selectors!  👇🏾
 var rock = document.querySelector('.rock');
 var paper = document.querySelector('.paper');
 var scissors = document.querySelector('.scissors');

 var wins = 0;
 var lose = 0;
// Event listeners! 👇🏾
var clickedRock = rock.addEventListener('click', grabTargetId);
var clickedPaper = paper.addEventListener('click', grabTargetId);
var clickedScissors = scissors.addEventListener('click', grabTargetId);
//event listener to classixBox.addEventListener('click', startGame); 
// function startGame() {
// where we want our hide/display   var humanPlayer = new Player();
// human player created    var computerPlayer = new Player();
// -- computer already chooses which version to play computerPlayer.makeChoice()
// create  instance game class which passes in the players as arguments var game = new Game(computerPlayer, humanPlayer)
//computer player to be created
//}
// Functions 👇🏾
     function grabTargetId(event) {
        var iconTarget = Number(event.target.id)
        getRandomIndex();
        console.log(game);

        // logic
         if(iconTarget === computerChoice) {
            console.log('ITS A TIE BITCH');
         } else if (iconTarget === 0 && computerChoice === 1) {
            //computerChoice // computerPlayer.choice
            lose ++;
            console.log('YOU LOSE!', 'Losses:', lose, 'ROCK DOESNT BEAT PAPER!');
           
         } else if (iconTarget === 0 && computerChoice === 2) {
            wins ++;
            console.log('YOU WIN!', 'Wins: ', wins, 'ROCK BEATS SCISSORS');
            
         } else if (iconTarget === 1 && computerChoice === 0) {
            wins ++;
            console.log('YOU WIN!', 'Wins:', wins, "PAPER BEATS ROCK");
           
         } else if (iconTarget === 1 && computerChoice === 2) {
            lose ++;
            console.log('YOU LOSE!', 'Losses:', lose, 'PAPER DOESNT BEAT SCISSORS');
         } else if (iconTarget === 2 && computerChoice == 0) {
            lose ++;
            console.log('YOU LOSE!', 'Losses:', lose, 'SCISSORS DOESNT BEAT ROCK');
         } else if (iconTarget === 2 && computerChoice === 1) {
            wins ++;
            console.log('YOU WIN!', 'Wins:', wins, 'SCISSORS BEATS PAPER');
         }
    };

    //Randomizing function
    function getRandomIndex() {
      computerChoice = Math.floor(Math.random() * 3);
      //  console.log('DEADLY AI CHOICE', computerChoice)
    }
