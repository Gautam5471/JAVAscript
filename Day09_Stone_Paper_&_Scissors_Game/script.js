

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options = ["rock","paper","scisscors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    
}

const drawgame=()=>{
    // console.log("Game was draw");
    msg.innerText = "Game was draw, play again";
        msg.style.backgroundColor="#081b31"  


}

const showWinner = (userWin,userchoice,compChoice) =>{
     if(userWin){
        userScore++;
        userscorepara.innerText = userScore;
        // console.log("you win! ");
        msg.innerText = `you Win! ${userchoice} beats ${compChoice} `;
        msg.style.backgroundColor="green"  
     }else{
        compScore++;
        compscorepara.innerText = compScore;
        // console.log("you lose")
        msg.innerText = `you lose ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red"  


     }
}

const playGame = (userchoice)=>{
    // console.log("user choice=",userchoice)
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("compchoice=",compChoice);

    if(userchoice === compChoice){
        //draw agme
        drawgame();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false: true;
        }else if(userchoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else{
            // rock,paer
            userWin=compChoice === "rock" ? false :true
       }
    showWinner(userWin,userchoice,compChoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        console.log("choice was clicked",userchoice);
        playGame(userchoice)
    })
})