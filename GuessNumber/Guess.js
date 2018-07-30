var random, playerCount,resetButton,para;
var guessButton = document.getElementById("submitBTN"); 
var mystatus = document.querySelector(".status");
var isWon = document.querySelector(".winningMessage");
span = document.createElement('span'); 


GameOver();

function resetGame(){
    guessButton.disabled = false;
    resetButton.hidden = true;
 
     random = Math.floor(Math.random() * 100)+1; 
     playerCount = 10; 
   para = document.createElement('p'); 
     para.textContent = playerCount; 
     document.body.appendChild(para);

}

function GameOver(){
    guessButton.disabled = true; 
   mystatus.textContent = "";
   span.textContent="";
     resetButton = document.createElement('button'); 
    resetButton.textContent="Start New Game"; 
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);

}



function processLogic(){


    if(playerCount == 10)
    span.textContent = "Previous Guessess: "; 
    if(playerCount!=0){
      

     var button = document.getElementById("submitBTN");
     var guessedNumber = document.querySelector(".guessnumber");

     var userGuess = Number(guessedNumber.value);
  
     if(guessedNumber == random){
         isWon.textContent = "Congratulation your guess is correct.!";
         isWon.style.backgroundColor = 'green';
   
       GameOver();
     }
     else{
         span.textContent += userGuess+' ';
         document.body.appendChild(span);
       
         if(userGuess > random){
            isWon.textContent = "WRONG!";
            isWon.style.backgroundColor = 'red';
            mystatus.textContent = "Last guess was too high";
         }
         else{
        isWon.textContent = "WRONG!";
        isWon.style.backgroundColor = 'red';
         mystatus.textContent= "Last guess was too low";
         }
     }
     playerCount--;
     
     PlayerLife();
     guessedNumber.value = ''; 
     guessedNumber.focus();


    }
    else{
         isWon.textContent = "Number of Try's finished. Game Over!.";
       GameOver();
    }


    function PlayerLife(){
     para.textContent = playerCount;
    }
}