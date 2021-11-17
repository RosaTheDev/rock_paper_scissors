//TODO Choose between classic and spicy
class Game {
    constructor() {
        this.game = "THIS IS MY GAME FILE"
        this.human = new Player('richard','👨🏽‍💻' );
        this.computer = new Player('AI', '💻');
        this.gameType = ''
        this.whoWon = ''
    }

    gameRules() {
        // console.log('GAME RULES', this.gameType)
        if(this.gameType === 'classic') {
            this.playClassicGame();
            this.human
        } else if (this.gameType === 'spicy') { 
            this.human.choice = Math.floor(Math.random() * 4);
            this.spicyGame();
        }
    }

    playClassicGame() {
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
            this.whoWon = 'COMPUTER WINS'    
            this.computer.wins++;
         } else if (winsCondition.rvs) {
            this.whoWon = 'HUMAN WINS'
            this.human.wins++;
         } else if (winsCondition.pvr) {
            this.whoWon = 'HUMAN WINS'
            this.human.wins++;
         } else if (winsCondition.pvs) {
            this.whoWon = 'COMPUTER WINS' 
            this.computer.wins++;
         } else if (winsCondition.svr) {
            this.whoWon = 'COMPUTER WINS' 
            this.computer.wins++;
         } else if (winsCondition.svp) {
            this.whoWon = 'HUMAN WINS'
            
            this.human.wins++;
         } else {
             this.drawOrTie();
         }
    }

    spicyGame() {
           var spicyWinsCondition = {
            rvp: this.human.choice === 0 && this.computer.choice === 1,
            rvs: this.human.choice === 0 && this.computer.choice === 2,
            rvg: this.human.choice === 0 && this.computer.choice === 3,
            pvr: this.human.choice === 1 && this.computer.choice === 0,
            pvs: this.human.choice === 1 && this.computer.choice === 2,
            pvg: this.human.choice === 1 && this.computer.choice === 3,
            svr: this.human.choice === 2 && this.computer.choice === 0,
            svp: this.human.choice === 2 && this.computer.choice === 1,
            svg: this.human.choice === 2 && this.computer.choice === 3,
            gvr: this.human.choice === 3 && this.computer.choice === 0,
            gvp: this.human.choice === 3 && this.computer.choice === 1,
            gvs: this.human.choice === 3 && this.computer.choice === 2
        }
     if (spicyWinsCondition.rvp) {
            this.computer.wins++;
            console.log('r v p');
         } else if (spicyWinsCondition .rvs) {
            this.human.wins++;
            console.log('r v s');
         } else if(spicyWinsCondition .rvg) {
             this.human.wins++;
             console.log('r v g');
         } else if (spicyWinsCondition.pvr) {
            this.human.wins++;
            console.log('p v r');
         } else if (spicyWinsCondition.pvs) {
            this.computer.wins++;
            console.log('p v s');
         } else if(spicyWinsCondition.pvg) {
             this.computer.wins++
             console.log('pvg');
         } else if (spicyWinsCondition.svr) {
            this.computer.wins++;
            console.log('s v r');
         } else if (spicyWinsCondition.svp) {
            this.human.wins++;
            console.log('s v p');
         } else if (spicyWinsCondition.svg) {
             this.computer.wins++
             console.log('s v g');
         } else if (spicyWinsCondition.gvr) {
             this.computer.wins++;
             console.log('g v r');
         } else if (spicyWinsCondition.gvp) {
             this.human.wins++;
             console.log('g v p');
         } else if (spicyWinsCondition.gvs) {
             this.human.wins++;
             console.log('g v s');
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
}
