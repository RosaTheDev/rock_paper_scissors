class Player {
    constructor(name, wins) {
        this.name = name;
        this.wins = wins || 0;
        this.gameChoice = 'box1' || 'box2'
        this.choice = ''
    }

    makeChoice() {
      this.choice = Math.floor(Math.random() * 3);
    }

    saveWinsToStorage() {
        
    }

    retrieveWinsFromStorage() {

    }

}
