// for 
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

for (let i = 1; i <= 10; i++) {
        // console.log(`Outer loop ${i}`);
        
    for (let z = 1; z <= 10; z++) {
    //    console.log(`Inner loop ${z}`);
    // console.log(i+'*'+z+'='+i*z);
    }
    
}


let myArray = ["haziq", "ahmad", "ali"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}



// break and continue


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Dected ${index}`);
//         break;
//     }
//     console.log(`Number ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Dected ${index}`);
        continue;
    }
    // console.log(`Number ${index}`);
    
}

// while loop

let i =0;
while (i <= 10) {
    // console.log(`value of ${i}`);
    i=i+2;
}

let myarray = ["haziq", "ahmad", "ali"]
let arr =0

while (arr < myarray.length) {
    // console.log(`value of ${myarray[arr]}`);
    arr++;
}

// do while
 
let score = 11;

do {
    console.log(`score is ${score}`);
    score++;
    
} while (score <= 10);