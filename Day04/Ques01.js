// // for given array with marks of students -> 89,97,50,67,90,80
// // find the avaerage of entire class


// let marks = [89,97,50,67,90,80];
// let sum =0;

// for(let val of marks ){
//     sum += val;
// }

// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`)


// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50]

// let i=0;
// for (let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val /10;
//     items[i]= items[i]-offer;
//     console.log(`value after the offer = ${items[i]}`)
//         i++;
// }


for(let i=0; i<items.length; i++){
    let offer= items[i]/10;
    items[i] -=offer;
    console.log(items[i])
}