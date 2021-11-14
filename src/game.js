
class Game {
    constructor() {
        this.game = "THIS IS MY GAME FILE"
        this.human = new Player('richard','👨🏽‍💻' );
        this.computer = new Player('AI', '💻');
        this.type = ''
        console.log(this.human)
    }


    gameSelected() {
        // pick the game by giving the boxes an ID and parsing out which game to play from the player class
    }

    gameRules() {
        var winsCondition = {
            rvp: this.human.choice  === 0 && this.computer.choice === 1,
            rvs: this.human.choice  === 0 && this.computer.choice === 2,
            pvr: this.human.choice  === 1 && this.computer.choice === 0,
            pvs: this.human.choice  === 1 && this.computer.choice === 2,
            svr: this.human.choice  === 2 && this.computer.choice === 0,
            svp: this.human.choice  === 2 && this.computer.choice === 1

        }
        // ties 
        this.drawOrTie();
        // logic
       if (winsCondition.rvp) {
               this.computer.wins ++;
               console.log('object')
         } else if (winsCondition.rvs) {
            this.human.wins ++;
         } else if (winsCondition.pvr) {
            this.human.wins ++;
         } else if (winsCondition.pvs) {
            this.computer.wins ++;
         } else if (winsCondition.svr) {
            this.computer.wins ++;
         } else if (winsCondition.svp) {
            this.human.wins ++;
         }
    }
    
    savedWins() {
        this.computer.saveWinsToStorage();
        this.human.saveWinsToStorage();
    }

    retrieveWins() {
        this.computer.retrieveWinsFromStorage();
        this.human.retrieveWinsFromStorage();
    }

    drawOrTie() {
       if(this.human.choice  === this.computer.choice) {
            console.log('ITS A TIE');
         } 
    }

    hardReset() {
        localStorage.clear();
    }
}
