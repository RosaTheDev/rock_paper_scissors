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
            changeRPS.innerText = 'COMPUTER WINS'    
            this.computer.wins++;
         } else if (winsCondition.rvs) {
            changeRPS.innerText = 'HUMAN WINS'
            this.human.wins++;
         } else if (winsCondition.pvr) {
            changeRPS.innerText = 'HUMAN WINS'
            this.human.wins++;
         } else if (winsCondition.pvs) {
            changeRPS.innerText = 'COMPUTER WINS' 
            this.computer.wins++;
         } else if (winsCondition.svr) {
            changeRPS.innerText = 'COMPUTER WINS' 
            this.computer.wins++;
         } else if (winsCondition.svp) {
            changeRPS.innerText = 'HUMAN WINS'
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
            changeRPS.innerText = 'COMPUTER WINS' 
         } else if (spicyWinsCondition .rvs) {
            this.human.wins++;
            changeRPS.innerText = 'HUMAN WINS' 
         } else if(spicyWinsCondition .rvg) {
             this.human.wins++;
             changeRPS.innerText = 'HUMAN WINS' 
         } else if (spicyWinsCondition.pvr) {
            this.human.wins++;
            changeRPS.innerText = 'HUMAN WINS' 
         } else if (spicyWinsCondition.pvs) {
            this.computer.wins++;
            changeRPS.innerText = 'COMPUTER WINS' 
         } else if(spicyWinsCondition.pvg) {
             this.computer.wins++
             changeRPS.innerText = 'COMPUTER WINS' 
         } else if (spicyWinsCondition.svr) {
            this.computer.wins++;
            changeRPS.innerText = 'COMPUTER WINS' 
         } else if (spicyWinsCondition.svp) {
            this.human.wins++;
            changeRPS.innerText = 'HUMAN WINS' 
         } else if (spicyWinsCondition.svg) {
             this.computer.wins++
             changeRPS.innerText= 'COMPUTER WINS' 
         } else if (spicyWinsCondition.gvr) {
             this.computer.wins++;
             changeRPS.innerText = 'COMPUTER WINS' 
         } else if (spicyWinsCondition.gvp) {
             this.human.wins++;
             changeRPS.innerText = 'HUMAN WINS' 
         } else if (spicyWinsCondition.gvs) {
             this.human.wins++;
             changeRPS.innerText = 'HUMAN WINS' 
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
            changeRPS.innerText = 'TIE' 
         } 
    }
}
