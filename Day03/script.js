// let sum = 0;
// for(let i=1; i<=100; i++){
//   sum = sum + i;
// }

// console.log("sum = ",sum);
// console.log("loop has ended")




// let i=1;
// while(i<=5){
//     console.log("i=",i)
//     i++;
// }


// let i=1;
// do{
//     console.log("Apna college");
//     i++;
// }while(i<=10);




// // for of loop

// str = "Apna college";
// let size = 0;
// for(let i of str){ //iterator -> character 
//     console.log("i=",i);
//     size++;
// }

// console.log("string size =",size) //12



// for-in loop
let student = {
    name :"Gautam kumar",
    age :19,
    cgpa :8.5,
    ispassed :true,
}

for(let key in student){
    console.log("key =",key,"value",student[key])
}