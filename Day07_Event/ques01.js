// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.


let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currmode="light";

modeBtn.addEventListener("click",()=>{
    // console.log("you are trying to change mode");
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark")
        body.classList.remove("light")
    }else{
      currmode="light";  
               body.classList.add("light")
        body.classList.remove("dark")


    }
    console.log(currmode)
})