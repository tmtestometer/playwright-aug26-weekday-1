/*

4 type of variable 

1 - implicit global - global variable 
2 - var - behave like impiclit global until it is not inside a function 
3 - let - blocked level
4 - const - blocked level

*/

//a = 10; // global implicit

// blocks 

// javascript blocking

const pi = 3.14
pi = 4.15;
let a = 30
console.log(a);
{
    {
        {
            {
                let a = 20;
                {
                    console.log(a)
                }
            }

        }
    }
    {
        let a = 30;
        {
           console.log(a)
        }
        {

        }
    }
}




