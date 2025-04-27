
const userEmail= "3B5tj@example.com"
//  //

if (userEmail) {
    console.log("Got user email");
    
} else{
    console.log("Did not get user email");
    
}

// falsy values
// false,0,-0,BigInt(0),"",null,undefined,NaN

// truthy values
// "0","false", " ",{},[],function(){}

// string is truthy value


// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }


// nullish coalescing operator (??)

// null undefined


// let val1

// val1=5 ?? 10
// console.log(val1);



let val1

val1= null ?? 10
// console.log(val1);


// ternary operator

//  (condition)? true:false




const icetea = 100
icetea <=80 ? console.log("i can buy ice tea") : console.log("i can not buy ice tea");