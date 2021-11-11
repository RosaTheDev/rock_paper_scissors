// Query Selectors!  👇🏾
 var rock = document.querySelector('.rock');
 var paper = document.querySelector('.paper');
 var scissors = document.querySelector('.scissors');
 var computerChoice;
 var wins = 0;
 var lose = 0;
// Event listeners! 👇🏾
var clickedRock = rock.addEventListener('click', grabTargetId);
var clickedPaper = paper.addEventListener('click', grabTargetId);
var clickedScissors = scissors.addEventListener('click', grabTargetId);

// Functions 👇🏾
     function grabTargetId(event) {
        var iconTarget = Number(event.target.id)
        getRandomIndex();
      //   console.log(iconTarget);

        // logic
         if(iconTarget === computerChoice) {
            console.log('ITS A TIE BITCH');
         } else if (iconTarget === 0 && computerChoice === 1) {
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
