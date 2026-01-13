let arr = [1,2,3,4,5];

// arr.forEach(function printval(val){ 
//  console.log(val);
// })


let Arr = ["delhi ","pune","mumbai"]

Arr.forEach((val,idx,Arr)=>{
    console.log(val.toUpperCase(),idx,Arr);
})


// Qs. For a given array of numbers, print the square of each value using the forEach loop.

let nums = [2,3,5,6,7];

nums.forEach((num)=>{
    console.log(num*num)
})