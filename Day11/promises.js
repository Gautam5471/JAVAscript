
// const getPromise=()=>{
//    return  new Promise((reslove,reject)=>{
// console.log("I am a promise");
// reslove("sucess");
// // reject("some error");
//     });
// }

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err)
// });


// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1...");
//             resolve("sucess");
//         },4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("sucess");
//         },4000);
//     });
// }



// console.log("fetching data1...");
// asyncFunc1().then((res)=>{
//     console.log(res);
//     console.log("some data2....");
//     asyncFunc2().then((res)=>{

//     })

// })




// let promise = new Promise((reslove,reject)=>{
// console.log("I am a promise");
// // reslove("sucess");
// reject("some error occured");
// });



// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//      console.log("data",dataId);
//      resolve("sucess");
//     // reject("error");
//      if(getNextData){
//         getNextData();
//      }
//     },5000); 
//     })
// }





function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("sucess");
           
        }, 2000);
    })
}

getData(1).then((res)=>{
    // console.log(res);
    // getData(2).then(()=>{
    //     console.log(res);
    // })
    return getData(2);
}).then((res)=>{
   return getData(3);
}).then((res)=>{
    console.log(res);
})

