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
 var startDivBtn = document.querySelector('.startbtns');
 var classicFighters = document.querySelector('.classic-fighters');

//* Event listeners! 👇🏾
 rock.addEventListener('click', grabTargetId);
 paper.addEventListener('click', grabTargetId);
 scissors.addEventListener('click', grabTargetId);
 godzilla.addEventListener('click', grabTargetId);
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

 

   function startGame() {
      game.retrieveWins();
      game.gameRules();
      game.computer.takeTurn();
      game.savedWins();
      hide(startDivBtn)
      show(classicFighters)
      grabTargetId;
   }

   function grabTargetId(event) {
      startGame();
      iconTarget = Number(event.target.id)
      console.log('targetid Human choice', iconTarget);

      game.human.choice = iconTarget;
      console.log('computer choice', game.computer.choice);
      humanScores.innerText = `Score: ${game.human.wins}`
      computerScores.innerText = `Score: ${game.computer.wins}`
    };
