
// increment and decrement 


let a = 10;

//a++; // increment , assignment
// pre increment = ++a , first increase then assign 
// post increment = a++ , first assign then increase


let b = a++ + ++a + a-- + --a + a++ + ++a;
      // 10 + 12 + 12 +    10 + 10 +  12

console.log("a:" , a);
console.log("b:" , b);

let d = 10;
d++;


d = d + 3;
d += 3
d -=3
d *=3
d /=3
d %=3