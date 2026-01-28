  
  let btn1=document.querySelector("#btn1");

  btn1.addEventListener("click",(evt)=>{
    console.log("button was clicked - handelor 1");
    
  })

  btn1.addEventListener("click",()=>{
    console.log("button was clicked - handelor 2")
  })

  const handelor3=()=>{
    console.log("button was clicked - handelor 3")

  };
  btn1.removeEventListener("click",handelor3);


//    btn1.addEventListener("click",()=>{
//     console.log("button was clicked - handelor 3")
//   })

   btn1.addEventListener("click",()=>{
    console.log("button was clicked - handelor 4")
  })


//   btn1.removeEventListener("click",()=>{
//     console.log("button was clicked - handelor 3");
//   })



  let div= document.querySelector("div");