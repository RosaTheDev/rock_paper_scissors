class Player {
    constructor(name, token) {
        this.name = name;
        this.token = token;
        this.wins = 0;
        this.gameChoice = ''
        this.choice = ''
    }

    takeTurn() {
       this.choice = Math.floor(Math.random() * 3);
    }


    saveWinsToStorage() {
        this.retrieveWinsFromStorage();
        this.wins ++
        localStorage.setItem(this.name, JSON.stringify(this.wins));
        
    }

    retrieveWinsFromStorage() {
        var getWins = localStorage.getItem(this.name);
        this.wins = JSON.parse(localStorage.getItem(this.name)) || 0;
        console.log(getWins);
    }
}
