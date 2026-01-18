
let newButt = document.createElement("button");
newButt.innerText = "clickme"; 
console.log(newButt)

let div = document.querySelector("div");
// div.append(newButt);
// div.prepend(newButt);
// div.before(newButt); 
div.after(newButt); 


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi, I am new! </i>";

document.querySelector("body").prepend(newHeading)


//remove elemnent

let para = document.querySelector("p") ;
para.remove(para)