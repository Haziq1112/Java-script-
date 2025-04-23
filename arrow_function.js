const user ={
    username: "Haziq",
    Price : 899,

    welcomeMessage : function () 
    {
        console.log(`${this.username} , welcome to website`); 
        // console.log(this); // this talk about current context 
        
    }
}
user.welcomeMessage()
user.username="Ahmad"
user.welcomeMessage()
// console.log(this); // node environment ji waja sa {} hoo ga 

// function one(){
//     let username = "haziq"
//     console.log(this.username); // output is undefined // and (this) only use in objects 
    
// }
// one()


// const one =function(){
//     let username = "haziq"
//     console.log(this.username); // output is undefined // and (this) only use in objects 
    
// }
// one()


const one =()=> {
    let username = "haziq"
    // console.log(this.username); // output is undefined // and (this) only use in objects 
    
}
one()

// const addtwo = (num1,num2) => {
//    return num1+num2
// }
// console.log(addtwo(3,4));

// const addtwo = (num1,num2) => num1+num2    // in this implecit return in which return lagyn aki zaroot ni hoti
 
//  console.log(addtwo(3,4));



                    // also use this too () and this () are also used to help in returning object 

 const addtwo = (num1,num2) => (num1+num2)    // in this implecit return in which return lagyn aki zaroot ni hoti
 
 console.log(addtwo(3,4));




 
