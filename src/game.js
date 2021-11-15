//TODO Choose between classic and spicy
class Game {
    constructor() {
        this.game = "THIS IS MY GAME FILE"
        this.human = new Player('richard','👨🏽‍💻' );
        this.computer = new Player('AI', '💻');
        this.gameType = ''
        // console.log(this.human)
    }

    gameSelected() {
        //* Classic Rules
        /*  var winsCondition = {
            rvp: this.human.choice  === 0 && this.computer.choice === 1,
            rvs: this.human.choice  === 0 && this.computer.choice === 2,
            pvr: this.human.choice  === 1 && this.computer.choice === 0,
            pvs: this.human.choice  === 1 && this.computer.choice === 2,
            svr: this.human.choice  === 2 && this.computer.choice === 0,
            svp: this.human.choice  === 2 && this.computer.choice === 1
        }*/

        // TODO pick the game by giving the boxes an ID and parsing out which game to play from the player class
        // TODO parse out which game is selected and which condition to pick
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
        // logic
       if (winsCondition.rvp) {
           // this.human.saveWinsToStorage ++;
            this.computer.wins ++;
            console.log('r v p')
         } else if (winsCondition.rvs) {
            this.human.wins ++;
            console.log('r v s')
         } else if (winsCondition.pvr) {
            this.human.wins ++;
            console.log('p v r')
         } else if (winsCondition.pvs) {
            this.computer.wins ++;
            console.log('p v s')
         } else if (winsCondition.svr) {
            this.computer.wins ++;
            console.log('s v r')
         } else if (winsCondition.svp) {
            this.human.wins ++;
            console.log('s v p')
         } else {
             this.drawOrTie();
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
        //TODO clear the storage after every game but not on pageload
        localStorage.clear();
    }
}
