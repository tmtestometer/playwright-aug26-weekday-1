// What is loop?
//  iteration 

// loop - until condition is satisfied

// while 

// let a = 20;
// while(a <= 10){
//     console.log(a);
//     a++;
// }


// let a = 20;
// do{
//     console.log(a);
//     a++;
// }while(a <= 10)
// console.log("Loop completed");

// for loop

// for(let a = 10 ; a>=0 ; a--){
//     console.log(a);   
// }


for(let i = 1; i <= 10; i++){ //i = 1
    let line= "";
    for(let j = 1; j <= i; j++){ // j = 10 times
        line += "* ";
    }
    console.log(line);
}

