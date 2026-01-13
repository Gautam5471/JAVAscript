// function 2 numbers, sum


function sum (a,b){
    // local varribles -> scope
    // funs parameters -> like local varribles -> block skope of function
    
    console.log("sum =",a+b);
   S = a+b;
   return S;
}
sum(3,2); 
sum(7,8);  

let value = sum(3,4);
console.log(value)