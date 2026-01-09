// let age = 19;
// let price = 100.99

// console.log(typeof age)
// console.log(typeof price)

// isfollow = true;
// console.log(typeof isfollow)

// let y;
// console.log(y) //undefined
// console.log(typeof y) //undefined


// let x=null;
// console.log(x) //null
// console.log(typeof x) //object


// let z=BigInt("123")
// let A=Symbol("Hello!")
// console.log(z);
// console.log(typeof z);
// console.log(A);
// console.log(typeof A);




const  student = {
    fullname : "Gautam kumar",
    age : 19,
    cgpa : 8.5,
    ispass : true

};


console.log(student)
console.log(typeof student)
console.log(student["fullname"]) //Gautam kumar
console.log(student.fullname) //Gautam kumar
console.log(student.age)

student["age"]=student["age"]+1;
student["fullname"]="S.A";
console.log(student.fullname)
console.log(student.age)
