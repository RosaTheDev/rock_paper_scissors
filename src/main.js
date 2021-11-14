var game = new Game()
// var human = new Player('richard');
// var computer = new Player('AI');
game.retrieveWins();

// Query Selectors!  👇🏾
 var rock = document.querySelector('.rock');
 var paper = document.querySelector('.paper');
 var scissors = document.querySelector('.scissors');
 var godzilla = document.querySelector('.godzilla')
 var humanScores = document.querySelector('.human-score');
 var computerScores = document.querySelector('.computer-score');
 var classicButton = document.querySelector('.choose-game');
 var spciyButton = document.querySelector('.spicy');

// Event listeners! 👇🏾
 rock.addEventListener('click', grabTargetId);
 paper.addEventListener('click', grabTargetId);
 scissors.addEventListener('click', grabTargetId);
 godzilla.addEventListener('click', grabTargetId);
 classicButton.addEventListener('click', showFunction);
 classicButton.addEventListener('click', startGame);
 window.addEventListener('onload', startGame);

 // Helper functions 👇🏾
     function show(element) {
      element.classList.remove('hidden');
   }

   function hide(element) {
      element.classList.add('hidden');
   }

   // create  instance game class which passes in the players as arguments var game = new Game(computerPlayer, humanPlayer)
   //computer player to be created
   //}
   
   /// on load function instatiate the class
   // Functions 👇🏾
   function showFunction(event) {
        target = Number(event.target.id)
        game.type = target;
        console.log(game)
      // console.log(event.target.id);
      // game.type = event.target.id
   }

   function startGame() {
      game.hardReset();
      game.gameRules();
      game.computer.takeTurn();
      game.savedWins();
      show(rock);
      show(paper);
      show(scissors);
      show(godzilla);
      hide(classicButton);
      hide(spciyButton);
      grabTargetId;
   }

   function grabTargetId(event) {
      startGame();
      iconTarget = Number(event.target.id)
      game.human.choice = iconTarget;
      humanScores.innerText = `Score: ${game.human.wins}`
      computerScores.innerText = `Score: ${game.computer.wins}`
    };
