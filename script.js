// starting element
const score1El = document.getElementById("score--1");
const score0El = document.querySelector("#score--0");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//Starting Condition
  score0El.textContent= 0;
  score1El.textContent= 0;
  current0.textContent= 0;
  current1.textContent= 0;
diceEl.classList.add("hidden");
let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing= true;

 const switchPlayer =function (){
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}


// rolling dice functionality

btnRoll.addEventListener("click", () => {
  // creating the random number
  if(playing){

    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);
  
    // display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${randomNumber}.png`;
  
    // if rolled dice is 1
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    }
    // then switch the player
    else {
        switchPlayer();
    }
  }
});


// hold button 
btnHold.addEventListener('click',()=>{
  // add current score into the into the main score 

  if(playing){

 
   score[activePlayer] += currentScore;
   document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
  // check score >=100
  if(score[activePlayer]>=20){
    diceEl.classList.add("hidden");
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      playing =false;
  }
  
  //otherwise  switch the player
     else{
     switchPlayer();
     }
    }
})


// starting new game 

btnNew.addEventListener('click',()=>{

  score0El.textContent= 0;
  score1El.textContent= 0;
  current0.textContent= 0;
  current1.textContent= 0;
 
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add("hidden");

   score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing= true;
})


