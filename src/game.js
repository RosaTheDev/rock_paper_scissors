
class Game {
    constructor() {
        this.game = "THIS IS MY GAME FILE"
    }


    gameSelected() {
        // pick the game by giving the boxes an ID and parsing out which game to play from the player class
    }

    gameRules() {
        var winsCondition = {
            pvs: humanPlayer.choice  === 0 && computerPlayer.choice === 1
        }






        // ties 
        this.drawOrTie();
        // logic
       if (winsCondition.pvs) {
               computerPlayer.wins ++;
               console.log('object')
         } else if (humanPlayer.choice  === 0 && computerPlayer.choice === 2) {
            humanPlayer.wins ++;
            // console.log('YOU WIN!', 'Wins: ', humanPlayer.wins, 'ROCK BEATS SCISSORS');
         } else if (humanPlayer.choice  === 1 && computerPlayer.choice=== 0) {
            humanPlayer.wins ++;
            // console.log('YOU WIN!', 'Wins:', humanPlayer.wins, "PAPER BEATS ROCK");
         } else if (humanPlayer.choice  === 1 && computerPlayer.choice === 2) {
            computerPlayer.wins ++;
         } else if (humanPlayer.choice  === 2 && computerPlayer.choice == 0) {
            computerPlayer.wins ++;
         } else if (humanPlayer.choice  === 2 && computerPlayer.choice === 1) {
            humanPlayer.wins ++;
            // console.log('YOU WIN!', 'Wins:', humanPlayer.wins, 'SCISSORS BEATS PAPER');
         }
    }
    
    savedWins() {
        computerPlayer.saveWinsToStorage();
        humanPlayer.saveWinsToStorage();
    }

    retrieveWins() {
        computerPlayer.retrieveWinsFromStorage();
        humanPlayer.retrieveWinsFromStorage();
    }

    drawOrTie() {
       if(humanPlayer.choice  === computerPlayer.choice) {
            console.log('ITS A TIE BITCH');
         } 
    }

    hardReset() {

    }
}
