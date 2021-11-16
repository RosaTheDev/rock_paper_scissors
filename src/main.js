var game = new Game();
// game.retrieveWins();

//* Query Selectors!  👇🏾
 var rock = document.querySelector('.rock');
 var paper = document.querySelector('.paper');
 var scissors = document.querySelector('.scissors');
 var godzilla = document.querySelector('.godzilla')
 var humanScores = document.querySelector('.human-score');
 var computerScores = document.querySelector('.computer-score');
 var classicButton = document.querySelector('.classic');
 var spicyButton = document.querySelector('.spicy');
 var startDivBtn = document.querySelector('.startbtns');
 var classicFighters = document.querySelector('.classic-fighters');
 var spicyFighters = document.querySelector('.spicy-fighters')

//* Event listeners! 👇🏾
 window.addEventListener('load', loadInfo);
 rock.addEventListener('click', grabTargetId);
 paper.addEventListener('click', grabTargetId);
 scissors.addEventListener('click', grabTargetId);
 godzilla.addEventListener('click', grabTargetId);
 classicButton.addEventListener('click', grabGameType);
 spicyButton.addEventListener('click', grabGameType);

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

   function loadInfo() {
      game.retrieveWins();
      displayWins(game.human.wins, game.computer.wins);
   }

   function displayWins(humanWins, computerWins) {
      // if (humanWins != null || computerWins != null) {
         humanScores.innerText = `Score: ${humanWins}`;
         computerScores.innerText = `Score: ${computerWins}`;
      // } 
   }

   function startGame(gameType) {
      game.gameType = gameType
      game.gameRules();
      game.computer.takeTurn();
      game.savedWins();
      displayWins(game.human.wins, game.computer.wins);
      hide(startDivBtn)
      show(classicFighters)
      show(spicyFighters)
      grabTargetId;


   }

   function grabTargetId(event) {
      startGame(game.gameType);
      iconTarget = Number(event.target.id)
      console.log('Human choice', iconTarget);
      game.human.choice = iconTarget;
      console.log('computer choice', game.computer.choice);
      // displayWins(game.human.wins, game.computer.wins);
      // humanScores.innerText = `Score: ${game.human.wins}`
      // computerScores.innerText = `Score: ${game.computer.wins}`
    };

    function grabGameType(event) {
       startGame(event.target.className);
    }
