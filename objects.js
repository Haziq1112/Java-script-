// singleton -> constructor sa singleton banta ha 

// object literals

const mysym= Symbol("key1")

const user = {
    Name :"Haziq",
    'full name':"Haziq Ahmad",
    City : "Lahore",
    RollNo: 20,
    [mysym]:"key1",
    isLoggedIn: false,
}

// console.log(user.Name) // another way to access 
// console.log(user['full name']) // this is secod way to access data 
// console.log(user[mysym])

user.City = "multan" // with this we can change the value 
// console.log(user.City)



// Object.freeze(user) // after freeze we can change the object values  


user.City = "Lahore"
// console.log(user)



user.greeting = function() {
    // console.log("Hello Haziq ");
    
}
user.greetingtwo = function() {
    console.log(`I'm ${this.Name} and i live in ${this.City} `);
    
}
// console.log(user.greeting());
// console.log(user.greetingtwo());



// singleton -> constructor 

// const pakiuser = new Object()  // singleton object 
const pakiuser = {} // is a non-singleton object 

pakiuser.id = '12abc'
pakiuser.name = "Ahmad"
pakiuser.isLoggedIn= false

// console.log(pakiuser);

const regularuser= {
    email:'ha@gmail.com',
    fullname :{
        userFullname: {
            FirstName : "Haziq",
            Second: "Ahmad"
        }
    }
}
//  console.log(regularuser.fullname.userFullname.Second);


const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

//  const obj3 = Object.assign({},obj1,obj2) // combain/clone the 2 objects  // and these {} is use as a target 
//  console.log(obj3);
 



 const obj3 = {...obj1,...obj2} // but we commonly use spread oprator to conbine 
// console.log(obj3);



const users =[
    {

        Name: "Ali",
        email:'ha@gmail.com'
    },
    {

        Name: "Ali",
        email:'ha@gmail.com'
    },   {

        Name: "Ali",
        email:'ha@gmail.com'
    },  
    {

        Name: "Ali",
        email:'ha@gmail.com'
    },
]
// users[1].email

// console.log(pakiuser);

// console.log(Object.keys(pakiuser));
// console.log(Object.values(pakiuser));
// console.log(Object.entries(pakiuser));

// console.log(pakiuser.hasOwnProperty('isLogged'));




// de-structuring


const course= {
    coursename: "js",
    price: "999",
    courseInstucture: "haziq"
}

const {courseInstucture : instructure } = course 

// console.log(instructure);







