var game = new Game();

//* Query Selectors!  👇🏾
 var rock = document.querySelector('.rock');
 var paper = document.querySelector('.paper');
 var scissors = document.querySelector('.scissors');
 var godzilla = document.querySelector('.godzilla')
 var humanScores = document.querySelector('.human-score');
 var computerScores = document.querySelector('.computer-score');
 var classicButton = document.querySelector('#classic');
 var spicyButton = document.querySelector('#spicy');
 var startDivBtn = document.querySelector('.startbtns');
 var classicFighters = document.querySelector('.classic-fighters');
 var spicyFighters = document.querySelector('.spicy-fighters')
 var whoWon = document.querySelector('.who-won');
 var changeRPS = document.querySelector('.midle-section-top');
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

   function showClassic() {
      show(classicFighters);
   }
   
   function showSpicy() {
      show(classicFighters);
      show(spicyFighters);
   }

  


   //* Main Functions 👇🏾
   
   function loadInfo() {
      game.retrieveWins();
      displayWins(game.human.wins, game.computer.wins);
   }
   
   function displayWins(humanWins, computerWins) {
      if (humanWins === null && computerWins === null) {
         humanScores.innerText = `Score: 0`;
         computerScores.innerText = `Score: 0`;
      }else if(humanWins === null && computerWins > 0){
         humanScores.innerText = `Score: 0`;
         computerScores.innerText = `Score: ${computerWins}`;
      } else if(humanWins > 0 && computerWins === null){
         humanScores.innerText = `Score: ${humanWins}`;
         computerScores.innerText = `Score: 0`;
      } else {
         humanScores.innerText = `Score: ${humanWins}`;
         computerScores.innerText = `Score: ${computerWins}`;
         
      }  
   }
      
      function grabGameType(event) {
         game.computer.takeTurn()
         startGame(event.target.className);
      }

   function startGame(gameType) {
      game.gameType = gameType
      game.gameRules();
      game.computer.takeTurn();
      grabTargetId;  
      game.savedWins();
      displayWins(game.human.wins, game.computer.wins);
      hide(startDivBtn)
      if(game.gameType === 'classic') {
         showClassic();
         // fight();
      } else if(game.gameType === 'spicy') {
         showSpicy();
      } else {
         showClassic();
      }
   }

   function fight(human, computer) {
      // console.log(user, computer)
     hide(classicFighters);
   //   show(whoWon)
     var humanImage = game.human.image[human]
     var computerImage = game.computer.image[computer]
     console.log('Human choice', humanImage);
     console.log('computer choice', computerImage);
      whoWon.innerHTML = 
      `
      <img src=${humanImage} alt="happy Rock" id="${human}">
      <img src="${computerImage}" alt="happy Rock" id="${computer}">
      `
      show(whoWon)
      // changeRPS.innerText = `computer won` 
      hide(spicyFighters)
      console.log(game)
      setTimeout(function() {
         hide(whoWon)
         show(classicFighters)
         changeRPS.innerText = `Play Again?`
      },1000)
   }

   function grabTargetId(event) {
      startGame(game.gameType);
      iconTarget = Number(event.target.id)
      game.human.choice = iconTarget;
      fight(game.human.choice, game.computer.choice);
    };

