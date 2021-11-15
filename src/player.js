class Player {
    constructor(name, token, wins) {
        this.name = name;
        this.token = token;
        this.wins = wins;
        this.gameChoice = ''
        this.choice = ''
    }

    takeTurn() {
     this.choice = Math.floor(Math.random() * 3);
    }

    // determine winner method to save into local storage

    saveWinsToStorage() {
        if(this.wins > 0) {
        var storedWins = JSON.stringify(this.wins);
        localStorage.setItem(this.name, storedWins);
        }
    }

    retrieveWinsFromStorage() {
        var getWins = localStorage.getItem(this.name);
        this.wins = JSON.parse(getWins);
        console.log(getWins);
    }
}
