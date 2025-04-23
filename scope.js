// let a =10
// const b=20
// var c =30 we don't use var 

//{} // is known as scope // jb ya function k sat use hota ha tb iss ko scpoe khety ha 

let a = 399
if (true){
let a =10
// console.log("INNER:",a);


}

// console.log(a);

function one(){
    const username = "Haziq"
                    // in this thing child ca access parent varibale 
    function two (){
        const website= "youtube"
        console.log(username);   
    }
    // console.log(website);
    two()
}
one()



if (true){
    const username= "haziq"
    if (username==='haziq'){
        const website = 'youtube'
        console.log(username + website);
        
    }
    // console.log(website); // iss k scope upper wali line phr end hoo gya 
    
}
// console.log(username); // iss k be same scpoe upper end hoo gya iss lia koi outupt ni aya



//important concept 


function addone(num) {//agr hm iss thra function declear krta ha toh hmm function sa phala access kr sakty 
    return num +1 
}

console.log(addone(5));

const addTwo = function(num){ //agr hm iss thra function declear krta ha toh hmm function sa phala access ni kr sakty 
    return num +2
}
addTwo(5)