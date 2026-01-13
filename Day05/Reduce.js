

let arr = [1,3,4,6];
// let output = arr.reduce((previous,current)=>{
//     return previous+current
// })
// console.log(output)

let output = arr.reduce((previous,current)=>{
    return previous > current ? previous : current;
})
console.log(output)