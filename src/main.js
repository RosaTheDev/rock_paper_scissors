var game = new Game();
game.retrieveWins();

//* Query Selectors!  👇🏾
 var rock = document.querySelector('.rock');
 var paper = document.querySelector('.paper');
 var scissors = document.querySelector('.scissors');
 var godzilla = document.querySelector('.godzilla')
 var humanScores = document.querySelector('.human-score');
 var computerScores = document.querySelector('.computer-score');
 var classicButton = document.querySelector('.choose-game');
 var spciyButton = document.querySelector('.spicy');

//* Event listeners! 👇🏾
 rock.addEventListener('click', grabTargetId);
 paper.addEventListener('click', grabTargetId);
 scissors.addEventListener('click', grabTargetId);
 godzilla.addEventListener('click', grabTargetId);
 classicButton.addEventListener('click', showFunction);
 classicButton.addEventListener('click', startGame);
 window.addEventListener('onload', startGame);

 //* Helper functions 👇🏾
     function show(element) {
      element.classList.remove('hidden');
   }

   function hide(element) {
      element.classList.add('hidden');
   }
   // create  instance game class which passes in the players as arguments var game = new Game(computerPlayer, humanPlayer)
   /// on load function instatiate the class
   //* Main Functions 👇🏾
   //! showFunction needs to be changed to something a bit more logical
   function showFunction(event) {
        target = Number(event.target.id)
        game.gameType = target;
      //   console.log('show TArget', game);
   //   console.log('instance in game', game.human)
   }

   function startGame() {
      game.retrieveWins();
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
