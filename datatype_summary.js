///////////////primitive ///////////

// 7 types


//string 
//numbers
//boolean
//null
//undefined
//symbol // use to make it unique
            // const id = symbol('123')
            // const anthoerID = symbol('123')
            // console.log (id === anthoerID)
//biugint // very large number(like signtific numbers)
 // for using this we do n at last of number

//////////// non-primitive / Reference types/////////

//arrays
const names = ['haziq', 'jahanian', 'ali']
//objects
const person = {
    name: 'haziq',
    age: 18
}
//Functions
 const myfunctiosn = function(){
    console.log('Haziq Ahmad ')
 }




 /// Memoryes 

 //Stack (primitive) , Heap (Non-Primitive) 

//in stack it give the copy or variable value 


 let myname = 'haziq'
 let another = myname
 console.log(another)
 another = 'Ahmad'
 console.log(myname)




 //in heap it give the reference

 let userone={
    email: 'haziq@gmail.com',
    cardId : 123
 }

 let usertwo = userone
 usertwo.cardId = 456
 console.log(userone.email)