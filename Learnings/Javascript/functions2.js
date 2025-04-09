//Recursion
function pow(x,n){
    if(n==1){
        return x;
    }
    else{
        return x* pow(x,n-1);
    }
}
console.log(pow(2,3));
let company = { 
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  

  function sumSalaries(department) {
    if (Array.isArray(department)) { 
      return department.reduce((prev, current) => prev + current.salary, 0); 
    } else {
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); 
      }
      return sum;
    }
  }
  
console.log(sumSalaries(company)); 

let list={
    value:10,
    next:{
        value:20,
        next:{
            value:30,
            next:null
        }
    }
};

let current=list;
while(current!==null){
    console.log(current.value);
    current=current.next;
}

let a=[1,2,3];
let b=[...a];
b.push(4);
console.log(a);
console.log(b);

let arr1 = [1, 2];
let arr2 = [3, 4];
let result = [...arr1,...arr2];

console.log(result); 

let nums = [5, 8, 10];
console.log(Math.max(...nums)); 

let user={name:"Aruna",age:20};
let updated={...user,name:"Anu"};
console.log(updated);
console.log(user);

let str="hello";
console.log([...str]);
let a1=[1,2,3];
let copy=[...a1];
console.log(copy);

let obj={a:1,b:2,c:3};
let objcpy={...obj};
console.log(objcpy);

//arguments
function addAll(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log(addAll(10,20,30));
function showAll(){
    console.log(arguments);
}
showAll("Divya","Sachu","Sridhar");

function sayHi() {
   phrase='hello';
   console.log(phrase);
    var phrase;
  }
sayHi();

+function(){
    var message="welcome";
    console.log(message);
}();
// console.log(message);

console.log("hello");


let user1={
    sayHi(){

    },
    sayBye:function(){

    }
};
console.log(user1.sayHi.name);
console.log(user1.sayBye.name);

let array=[function(){}];
console.log(array[0].name);

const celsiusTemps = [0, 10, 20, 30];
const fahrenheitTemps = celsiusTemps.map(celsius => (celsius * 9/5) + 32);

console.log(fahrenheitTemps); 


const userEmails = ['user1@example.com', 'user2@example.com', 'user3@example.com'];

userEmails.forEach(email => {
  sendWelcomeEmail(email);
});

function sendWelcomeEmail(email) {
  console.log(`Welcome email sent to ${email}`);
}

const prices = [100, 50, 20, 75];

prices.sort((a, b) => a - b);

console.log(prices);

const orders = [
    { id: 1, item: 'Laptop' },
    { id: 2, item: 'Phone' },
    { id: 3, item: 'Tablet' }
  ];
  
  const order = orders.find(order => order.id === 2);
  
  console.log(order); 

  const users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true }
  ];
  
  const activeUsers = users.filter(user => user.active);
  
  console.log(activeUsers);

  const words = ['JavaScript', 'is', 'a', 'versatile', 'language'];

const sentence = words.reduce((accumulator, currentValue) => {
  return accumulator + ' ' + currentValue;
}, '');

console.log(sentence);
