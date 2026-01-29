
// async await >> promise chains >> callback hell 

// console.log("one");
// console.log("two");
// console.log("three");

// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000); //timeout


//another way

// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello");
// },2000); //timeout
// console.log("three");
// console.log("four");


//callBack

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// sum(1,2,(a,b)=>{
//     console.log(a+b);
// });



// const hello=()=>{
//     console.log("hello");
// }
// setTimeout(hello,3000);



//Callback Hell

//nesting
// let age=19;
// if(age>18){
//     if(age>=60){
//         console.log("senior");
//     }else{
//         console.log("middle");
//     }
// }else{
//     console.log("child");
// }

// for(let i=0; i<5; i++){
//     let str="";
//     for(let j=0; j<5; j++){
//         str+=j;
//     }
//         console.log(i,str);
    
// }


//Async await.
function getData(dataId,getNextData){
    setTimeout(()=>{
     console.log("data",dataId);
     if(getNextData){
        getNextData();
     }
    },2000); //2s
}

getData(1,()=>{
    console.log("getting data 2....");
    getData(2,()=>{
    console.log("getting data 3....");
        getData(3,()=>{
    console.log("getting data 4....");
            getData(4);
        });
    });
});
