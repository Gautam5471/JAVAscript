// Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.


function countvowels(str){
    let count = 0;
    for (const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
   return count;

}

// countvowels("apnacollege")




// Create an arrow function to perform the same task.

const countVow=(str)=>{
    let count = 0;
    for (const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
   return count;


}
