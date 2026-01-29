

// async function hello(){
//     console.log("hello");
// };


// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("weather data");
//         resolve(200);
//         }, 2000);
//     });
// }

//  async function getWeatherData() {
//     await api(); //1st call
//     await api();
//  }


function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("sucess");
        }, 2000);
    })
}

async function getAllData() {
    console.log("getting data 1....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(3);
    console.log("getting data 4....");
    await getData(4);

}


//IIFE immeditialy invoked function expression
(async function () {
    console.log("getting data 1....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(3);
    console.log("getting data 4....");
    await getData(4);

})();