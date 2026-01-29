//You are creating a website for your college. Create a class User with 2 properties, name &email. It also has a method called viewData( ) that allows user to view website data.

let DATA = "secret information";
 class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("my data =", DATA);
    }
 }

 class Admin extends user{
    constructor (name,email){
        super(name,email);
    }
    editdata(){
        DATA = "some new value";
    }
 }
 let student1 = new user("GAutam","abc@gmil.com")
 let student2 = new user("S.A","sa@gmail.com");

 let teacher1 = new user ("Dean","example@gmail.com");
 let admin1= new Admin("admin","admin@gmial.com");

 console.log(admin1)
 console.log(user)

//Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

