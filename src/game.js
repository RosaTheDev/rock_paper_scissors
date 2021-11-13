
class Game {
    constructor() {
        this.game = "THIS IS MY GAME FILE"
    }


    gameSelected() {
        // pick the game by giving the boxes an ID and parsing out which game to play from the player class
    }

    gameRules() {
        // ties 
        this.drawOrTie();
        // logic
       if (humanPlayer.choice  === 0 && computerPlayer.choice === 1) {
            //computerChoice // computerPlayer.choice
               humanPlayer.losses ++;
               computerPlayer.wins ++;
            console.log('YOU LOSE!', 'Losses:', humanPlayer.losses, 'ROCK DOESNT BEAT PAPER!');
           
         } else if (humanPlayer.choice  === 0 && computerPlayer.choice === 2) {
            humanPlayer.wins ++;
            computerPlayer.losses ++;
            console.log('YOU WIN!', 'Wins: ', humanPlayer.wins, 'ROCK BEATS SCISSORS');
            
         } else if (humanPlayer.choice  === 1 && computerPlayer.choice=== 0) {
            humanPlayer.wins ++;
            computerPlayer.losses ++;
            console.log('YOU WIN!', 'Wins:', humanPlayer.wins, "PAPER BEATS ROCK");
           
         } else if (humanPlayer.choice  === 1 && computerPlayer.choice === 2) {
            humanPlayer.losses ++;
            computerPlayer.wins ++;
            console.log('YOU LOSE!', 'Losses:', humanPlayer.losses, 'PAPER DOESNT BEAT SCISSORS');
         } else if (humanPlayer.choice  === 2 && computerPlayer.choice == 0) {
            humanPlayer.losses ++;
            computerPlayer.wins ++;
            console.log('YOU LOSE!', 'Losses:', humanPlayer.losses, 'SCISSORS DOESNT BEAT ROCK');
         } else if (humanPlayer.choice  === 2 && computerPlayer.choice === 1) {
            humanPlayer.wins ++;
            computerPlayer.losses ++;
            console.log('YOU WIN!', 'Wins:', humanPlayer.wins, 'SCISSORS BEATS PAPER');
         }
    }
    
    savedWins() {

    }

    drawOrTie() {
       if(humanPlayer.choice  === computerPlayer.choice) {
            console.log('ITS A TIE BITCH');
         } 
    }

    hardReset() {

    }
}
