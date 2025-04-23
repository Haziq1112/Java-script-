function addtwonum(number1,number2) {
 let result 
  result = number1+number2 
  return result 
}
const  result = addtwonum(3,5)
// console.log("Result:",result);


function loginuser(username){
    if (username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} logged In`
}
// console.log(loginuser("Haziq"))


// function calculatecartprice(...num1){  // ... is rest/spread operater iss ko iss lia use krty bcz easily multiple values at a time pass hoo sakti ha
//     return num1

// }

// console.log(calculatecartprice(2,3,4,5,8,6,));

function calculatecartprice(val1,val2,...num1){  // val1 ko 1 value mil gyi or val2 ko 2 value and remaining ...num1
    return num1

}

// console.log(calculatecartprice(2,3,4,5,8,6,));


const user ={
    username:"Haziq",
    Price: 199
}
function handelobject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.Price}`);
    
}
// handelobject(user)

const muArray= [200,400,600]

function returnarray(getarray){
    return getarray
}
console.log(returnarray(muArray));
