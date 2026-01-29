

class ToyataCar  {
    constructor (brand,milage){
        console.log("creating new object");
        this.brand=brand;
        this.milage=milage;

    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}

// console.log(ToyataCar)

let fortuner = new ToyataCar("fortuner",10); //constructor
let lexus = new ToyataCar("lexus",12); //constructor
console.log(fortuner);
console.log(lexus);


// fortuner.setBrand("fortuner")
// lexus.setBrand("lexus");

// console.log(fortuner)