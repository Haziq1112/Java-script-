
// for of loop 

const arr = ['haziq','ahmad','ali']

for (const num of arr) {
    // console.log(num);

    
}

// Maps 

const map = new Map()
map.set('PK', 'Pakistan')
map.set('US', 'United States')
map.set('IND', 'India')

// console.log(map);


for (const [key,value] of map) {
    // console.log(key,"-",value);
}



// with forof loop we cann't itrate the object




// for in loop


const myobject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
}

for (const key in myobject) {
    // console.log(`${key} and it values is  ${myobject[key]}`);
    
}


const array = [ 'value1','value2','value3', ]
   
for (const key in array) {
//   console.log(`${key} and it values is  ${array[key]}`);
  
}


// for each loop



const coding = ['js','c#','java','python']
                    // in this foe each loop it doesn't have any function name
// coding.forEach( function (item) {
//     console.log(item);
    
// })


// we can also use arrow function

// coding.forEach((items)=>{
//     console.log(items);
    
// })



// we can also use normal function
function printme(item) {
    // console.log(item);
}
coding.forEach(printme)


// we can also find more values 
coding.forEach((item ,index)=>{
//   console.log(item,index);
})


const mycoding=[
    {
        langageName:'js',
        type:'scripting',
    },
    {
        langageName:'java',
        type:'scripting',
    },
    {
        langageName:'python',
        type:'scripting',
    }
]


mycoding.forEach((item)=>{
    console.log(item.langageName);
    
})