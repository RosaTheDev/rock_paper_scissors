//TODO Choose between classic and spicy
class Game {
    constructor() {
        this.game = "THIS IS MY GAME FILE"
        this.human = new Player('richard','👨🏽‍💻' );
        this.computer = new Player('AI', '💻');
        this.gameType = ''
        console.log('GAME FILE',this.human);
        console.log('GAME FILE', this.computer)
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

        /*  var spicyWinsCondition = {
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
        }*/
    /*  if (spicyWinsCondition .rvp) {
            this.computer.wins++;
            console.log('r v p');
         } else if (spicyWinsCondition .rvs) {
            this.human.wins++;
            console.log('r v s');
         } else if(spicyWinsCondition .rvg) {
             this.human.wins++;
             console.log('r v g');
         } else if (spicyWinsCondition spicyWinsCondition.pvr) {
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
             thius.human.wins++;
             console.log(g v s);
         } 
    */
        // TODO pick the game by giving the boxes an ID and parsing out which game to play from the player class
        // TODO parse out which game is selected and which condition to pick
    }

    gameRules() {
        console.log('GAME RULES', this.gameType)
        if(this.gameType === 'classic') {
            this.playClassicGame();
        } else if (this.gameType === 'spicy') { 
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
        // console.log(winsCondition);
        // logic
       if (winsCondition.rvp) {
            this.computer.wins++;
            console.log('r v p')
         } else if (winsCondition.rvs) {
            this.human.wins++;
            console.log('r v s')
         } else if (winsCondition.pvr) {
            this.human.wins++;
            console.log('p v r')
         } else if (winsCondition.pvs) {
            this.computer.wins++;
            console.log('p v s')
         } else if (winsCondition.svr) {
            this.computer.wins++;
            console.log('s v r')
         } else if (winsCondition.svp) {
            this.human.wins++;
            console.log('s v p')
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
     if (spicyWinsCondition .rvp) {
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
             thius.human.wins++;
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

    hardReset() {
        //TODO clear the storage after every game but not on pageload
        localStorage.clear();
    }
}
