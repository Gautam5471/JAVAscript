let score = prompt("enter your score (0-100)")

if(score<=100 && score>=90){
    console.log("Grades is A")
} else if(score<90 && score>=70){
    console.log("Grade is B")
}else if(score<70 && score>=60){
    console.log("Grades is C")
}else if(score<60 && score>=50){
    console.log("grades is D")
}else if(score<50 && score>=0){
    console.log("Fail")
}