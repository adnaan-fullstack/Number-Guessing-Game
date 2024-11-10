let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let Hscore = 0;
const checkBtn = document.querySelector(".check");
const AgainBtn = document.querySelector(".btn");
const numberDisplay = document.querySelector(".number");
const Message = document.querySelector(".message");
const Score = document.querySelector(".score");
const highScore =document.querySelector(".highScore");
let  inputText =document.querySelector("#textBox");

const displayMessage = function(message){
    Message.textContent = message;
}

//  The CHECK Logic of the Game

checkBtn.addEventListener('click', () => {
    const playerInput = Number(inputText.value);

    if(!playerInput){
        displayMessage("Please Enter a Number🤬");
    }

    // when the GUESS is wrong

    else if(playerInput !== secretNumber){
        if(score > 1){
            displayMessage(playerInput < secretNumber ? "TOO LOW📈 Try it again!" : " TOO HIGH Try it again");
            score--;
            Score.textContent = score
        }
        else{
            displayMessage("You Lost The Game 😥😥");
            Score.textContent = 0;
        }
    }

    else if(playerInput === secretNumber){
        displayMessage("Congratulation You Got it🎉");
        score--;
        Score.textContent = score;
         document.querySelector('.container').style.backgroundColor = '#60b347';
         numberDisplay.textContent = secretNumber
         numberDisplay.style.width = "90px"

         if(score > Hscore){
            Hscore = score
            highScore.textContent = Hscore;
         }
    }

    else{
        displayMessage("You Lost The Game 😥😥");
        Score.textContent = 0;
    }

})

AgainBtn.addEventListener("click", () =>{
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    displayMessage("Start Guessing ......");
    Score.textContent = score;
    inputText.value = "";
    document.querySelector('.container').style.backgroundColor = '#0a120e';
    numberDisplay.textContent = "?"
    numberDisplay.style.width = "70px"
    
})
 