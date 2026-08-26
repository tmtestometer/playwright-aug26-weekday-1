
// Conditional statement 

// if else 

// 0- 18 = Child
// 19 - 30 = Adult
// 31 - 45 = mature
//  > 45 = old

// 17,18,19, 29,30, 31, 44, 45, 46
let age = 60;
let ageGroup = "";

if(age <= 18){
    ageGroup = "Child";
}else if(age > 18 && age <= 30){
    ageGroup = "Adult";
}else if(age > 30 && age <= 45){
    ageGroup = "Mature";
}else{
    ageGroup = "old";
}
console.log(ageGroup);



