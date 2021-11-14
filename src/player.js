class Player {
    constructor(name, token, wins) {
        this.name = name;
        this.token = token;
        this.wins = wins || 0;
        this.gameChoice = 'box1' || 'box2'
        this.choice = ''
    }

    takeTurn() {
     this.choice = Math.floor(Math.random() * 3);
    }

    saveWinsToStorage() {
        // localStorage.clear();
        if(this.wins > 0) {
            var storedWins = JSON.stringify(this.wins);
            localStorage.setItem(this.name, storedWins);
        } 
        // local Storage
        //  var savedWins = JSON.stringify(this.wins)
    }

    retrieveWinsFromStorage() {
        var getWins = localStorage.getItem(this.name);
        this.wins = JSON.parse(getWins);
        console.log(getWins);
    }

}
