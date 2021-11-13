class Player {
    constructor(name, wins, losses) {
        this.name = name;
        this.wins = wins || 0;
        this.losses = losses ||0;
        // this.gameChoice = 'box1' || 'box2'
        this.choice = ''
    }

    makeChoice() {
     this.choice = Math.floor(Math.random() * 3);
    }

    saveWinsToStorage() {
        // local Storage
        this.wins 
    }

    retrieveWinsFromStorage() {
        // local Storage
    }

}
