//  Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.




let gameNum = 25;
let userNum = prompt("enter the nuber")
console.log(userNum);

while(userNum != gameNum){
   userNum = prompt("you enterd wrong number.guess again")
}

console.log("congratulations,you enter the right number");