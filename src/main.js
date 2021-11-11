// Query Selectors!  👇🏾
 var rock = document.querySelector('.rock');
 var paper = document.querySelector('.paper');
 var scissors = document.querySelector('.scissors');

// Event listeners! 👇🏾
var clickedRock = rock.addEventListener('click', grabTargetId);
var clickedPaper = paper.addEventListener('click', grabTargetId);
var clickedScissors = scissors.addEventListener('click', grabTargetId);

// Functions 👇🏾
     function grabTargetId(event) {
        var iconTarget = Number(event.target.id)
        getRandomIndex();
        console.log(iconTarget);
    };


    //Randomizing function
    function getRandomIndex() {
       var computerChoice = Math.floor(Math.random() * 3);
       console.log('DEADLY AI CHOICE', computerChoice)
    }
