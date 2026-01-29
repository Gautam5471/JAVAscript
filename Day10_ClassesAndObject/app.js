 
//object,prototype



// const student ={
//     fullname:"Gautam kumar",
//     marks:91,
//     printmarks: function(){
//         console.log("marks=",this.marks); //student marks
//     }
// }

// console.log(student)



const employee = {
    calctax (){
        console.log("tax rate is 10%");
    }, 
    // calcTax2:function (){
    //     console.log("tax rate is 10%");
    // }
}

console.log(employee.calctax());

const karanArjun = {
    salary:50000,
    calctax (){
        console.log("tax rate is 10%");
    }, 
};
// const karanArjun2 = {
//     salary:50000,
// };const karanArjun3 = {
//     salary:50000,
// };const karanArjun4 = {
//     salary:50000,
// };
karanArjun__proto__ = employee;
// karanArjun2__proto__ = employee;
// karanArjun3__proto__ = employee;
// karanArjun4__proto__ = employee;

console.log(karanArjun.calctax1)
// console.log(karanArjun2.calctax1)
