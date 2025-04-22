
const myArry = [0,1,2,3,4,5]

// console.log(myArry[1]) 

// array methodds 

myArry.push(6) // add element at the end
// console.log(myArry) 

myArry.pop(6) // remove the element which we want to remove 
// console.log(myArry) 


myArry.unshift(6) // add element at the start
// console.log(myArry) 

myArry.shift() 
// console.log(myArry)


// console.log(myArry.includes(9)) // to check a value is present or not 

// console.log(myArry.indexOf(3)) //to find the index

const newAryy= myArry.join()
// console.log(newAryy)


// slice , splice 


// console.log('A',myArry)

const myn1 = myArry.slice(1,3) // or iss ma array same reati ha
// console.log(myn1)


// console.log('B',myArry)

const myn2 = myArry.splice(1,3) // pori array manuplate hoo jati hs uss ma sa utna portions he remove ho jata ha
// console.log(myn2)




const myname= ["Haziq","Ali","Ahmad"]
const city= ["Multan",'lahore','jahanian']


const all=myname.concat(city) // concat is use to merg two arrays 
// console.log(all)

const All=[...myname,...city] // spread operator it also use to join two arrays 
// console.log(All)

const another= [1,2,3[4,5[6,7]]] 
const real = another.flat(3) // arrange all arrays
// console.log(real)



console.log(Array.isArray("Haziq")) // to check 
console.log(Array.from("Haziq"))// use to make array
console.log(Array.from({name:'Haziq'}))

let score1=200
let score2=300
let score3=400


console.log(Array.of(score1,score2,score3))


