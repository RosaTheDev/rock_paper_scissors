class Player {
    constructor(name, token) {
        this.name = name;
        this.token = token;
        this.wins = 0;
        this.choice = ''
        this.image = ['assets/happy-rocks.png', 'assets/happy-paper.png', 'assets/lines-scissors.png', 'assets/godzilla.png']
    }

    
    takeTurn() {
     this.choice = Math.floor(Math.random() * 3);
    }

    // determine winner method to save into local storage

    saveWinsToStorage() {
        // if(this.wins > 0) {
        var storedWins = JSON.stringify(this.wins);
        localStorage.setItem(this.name, storedWins);
        // console.log('PLAYER STORED WINS', storedWins)
        // }
    }

    retrieveWinsFromStorage() {
        var getWins = localStorage.getItem(this.name);
        this.wins = JSON.parse(getWins);
        // console.log(getWins);
    }
}
