// We are given array of marks of students. Filter our of the marks of students that scored 90+.

// let = marks = [97,64,67,89,98,87];

// let topperarrray = marks.filter((val)=>{
//     return val>90
// })

// console.log(topperarrray)





// Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let n =prompt("enter the number :");

let arr = [];
for(let i=0; i<=n; i++){
    arr[i-1]=i;
}

console.log(arr);

let sum = arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(sum)