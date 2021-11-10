// Query Selectors!  👇🏾
 var rock = document.querySelector('.rock');
 var paper = document.querySelector('.paper');
 var scissors = document.querySelector('.scissors');

// Event listeners! 👇🏾
var clickedRock = rock.addEventListener('click', function (e) {
    console.log(e.target.id)
});
var clickedPaper = paper.addEventListener('click', function (e) {
    console.log(e.target.id)
});
var clickedScissors = scissors.addEventListener('click', function (e) {
    console.log(e.target.id)
});

// Functions 👇🏾
