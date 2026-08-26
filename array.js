
// student - ram
// math - 70, arts = 80, science = 85

// 50 more 
// 150 variable


// array 

// let ram_marks = [70,80,85]

// ram_marks.push(100); // [70, 80, 85, 100]
// ram_marks.shift(); // [80, 85, 100]
// ram_marks.unshift(120); // [120, 80, 85, 100]
// ram_marks.pop(); // [120, 80, 85]
// ram_marks.push(200); // [120, 80, 85, 200]
// ram_marks.splice(2,0,45); // // [120, 80, 45, 85,200]
// ram_marks.splice(0,1,90); // [90, 80, 45,85,200]


// console.log(ram_marks)

// for(let i of ram_marks){
//     console.log("value is " + i);
// }


//                0  1  2
// index 

// console.log(ram_marks[1]);
//console.log(ram_marks)
// console.table(ram_marks);
// push - add value end of the array
// unshift - add value start of the array
// pop - remove the data from end of the array
// shift - remove the data from start of array

// specific 3 main param , delete + insert
// splice ( index , deleteCount, addingElement)

//ram_marks.splice(1, 1, 100)
// 70,100,85

//ram_marks.shift();
//console.log(ram_marks);


// JSON = java script object notation
// object = {}
// array = []


let ram_marks1 = {
    "science" : 85,
    "math" : 70,
    "arts" : 80,
    "yearlyMarks" : [
        {
            "math" : 80,
            "science" : ""
        },
        {
            "sst" : 80
        }
    ]
}
console.log(ram_marks1["yearlyMarks"][0]["math"])

