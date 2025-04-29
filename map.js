
const coding =['js','ruby','java']
                                // for each loop doesn't return any value 
const values= coding.forEach((item)=>{
    // console.log(item);
    return item
})


// console.log(values);


// const Mynum = [1,2,3,4,5,6,7,8,9,10]

// const newnum = Mynum.filter( (num) => num > 4 )
// console.log(newnum);


// we can do this with both methods upper and lower method in this 




// lower method user return keyword to return the value 

// const Mynum = [1,2,3,4,5,6,7,8,9,10]

// const newnum = Mynum.filter( (num) => {
//     return num > 4
// } )
// console.log(newnum);





// const Mynum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = []
// Mynum.forEach( (num) => {
//    if (num>4) {
//     newNums.push(num)
    
//    } 
// })
// console.log(newNums);


// const Mynumber = [1,2,3,4,5,6,7,8,9,10]


// const newnum= Mynumber.map( (num)=> num+10 )

// const newnum= Mynumber.map( (num)=> {
//     return num+10
// } )
// const newnum= Mynumber.map( (num)=> {
//     return num+10
// } )




// chaining methods

// const newnum= Mynumber
                    // .map( (num)=> num*10 )
                    // .map((num)=>num+1)
                    // .filter((num) => num > 40)
// console.log(newnum);



// Reduce method


const Mynumber = [1,2,3]


// const mytotl= Mynumber.reduce(function (acc,currentvalue){
//     console.log(`acc: ${acc} and currentvalue: ${currentvalue}`);
    
//     return acc  +  currentvalue
// },0)
const mytotl= Mynumber.reduce( (acc,currentvalue)=>{
    // console.log(`acc: ${acc} and currentvalue: ${currentvalue}`);
    return acc  +  currentvalue
},0)
// console.log(mytotl);


const shoppingCart = [
    {
        name: 'Shoes',
        price: 1200
    },
    {
        name: 'Shirt',
        price: 2200
    },
    {
        name: 'Pants',
        price: 3200
    }
]


const total= shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(total);
