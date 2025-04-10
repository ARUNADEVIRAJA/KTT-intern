//map
const celsiusTemps = [0, 10, 20, 30];
const fahrenheitTemps = celsiusTemps.map(celsius => (celsius * 9/5) + 32);

console.log(fahrenheitTemps); 

//forEach
const userEmails = ['user1@example.com', 'user2@example.com', 'user3@example.com','welcome@gmail'];

userEmails.forEach(email => {
  sendWelcomeEmail(email);
});

function sendWelcomeEmail(email) {
  console.log(`Welcome email sent to ${email}`);
}

//sort
const prices = [100, 50, 20, 75];

prices.sort((a, b) => a - b);

console.log(prices);

//find
const orders1 = [
    { id: 1, item: 'Laptop' },
    { id: 2, item: 'Phone' },
    { id: 3, item: 'Tablet' }
  ];
  
  const order = orders1.find(order => order.id === 2);
  
  console.log(order); 


  //filter
  const users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true }
  ];
  
  const activeUsers = users.filter(user => user.active);
  
  console.log(activeUsers);

  const words = ['JavaScript', 'is', 'a', 'versatile', 'language'];

  //reduce
const sentence = words.reduce((accumulator, currentValue) => {
  return accumulator + ' ' + currentValue;
}, '');

console.log(sentence);

//forEach
const orders = [
  { id: 1, product: 'Laptop', quantity: 2 },
  { id: 2, product: 'Mouse', quantity: 0 },
  { id: 3, product: 'Keyboard', quantity: 1 }
];

orders.forEach(order => {
  if (order.quantity === 0) {
    return;
  }
  console.log(`Processing order ${order.id} for ${order.product}`);
});
//for of
for (const order of orders) {
  if (order.quantity === 0) {
    break;
  }
  console.log(`Processing order ${order.id} for ${order.product}`);
}

//for loop
const cart = [
  { item: 'Book', price: 15 },
  { item: 'Pen', price: 5 },
  { item: 'Notebook', price: 10 }
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
  total += cart[i].price;
}

console.log(`Total Price: $${total}`);

//filter
const Orders=[
    {name:"Tamizhini",age:2},
    {name:"Ini",age:19},
    {name:"kabi",age:20},
    {name:"siva",age:26}
];
const adults=Orders.filter(value=>value.age>=18);
console.log(adults);

//for loop

function isValidEmail(email){
    return email.includes("@") && email.includes('.');
}
for(let i=0;i<userEmails.length;i++){
    const email=userEmails[i];
    if(!isValidEmail(email)){
        console.log("Invalid email found");
    }
    else{
        console.log(`valid email: ${email}`);
    }
}






global.globalVar = 'I am a global variable';

function createFunction() {
localVar = 'I am a local variable';

  
  var func = new Function('console.log(globalVar);'); // Accesses globalVar
  return func;
}

var newFunc = createFunction();
newFunc(); 


function getFunc() {
    let value = "test";
  
    let func = function() { console.log(value); };
  
    return func;
  }
  
  getFunc();
  
  let descriptor=Object.getOwnPropertyDescriptor(Orders[0],'name');
  console.log(descriptor);

  const arr = [3,4,5];

  for (const val in arr) {
    console.log(val); 
  }
  for(const val of arr){
    console.log(val);
  }

const obj={
    name:"aruna",
    age:20,
    clg:"BIT"
  };
  for(const key in obj){
    console.log(key+" "+obj[key]);
  }

  for(const key of Object.keys(obj)){
    console.log(key);
  }


  //prototype
  let animal={
    eats:true,
    walks(){
        return "Animal Walks";
    }
  };
let rabbit=Object.create(animal,{
    jumps:{
        value:true
    }
});

console.log(rabbit.walks());
console.log(rabbit.jumps);

let cat=Object.getPrototypeOf(rabbit);
console.log(cat.eats);
console.log(rabbit.jumps);

console.log(Object.getPrototypeOf(rabbit)===animal);

const vehicle = {
  start() {
    console.log("Vehicle starting...");
  }
};

const car={};
Object.setPrototypeOf(car,vehicle);
console.log(car.start());

for(let prop in rabbit){
  let isOwn=rabbit.hasOwnProperty(prop);
  if(isOwn){
    console.log(`OWn:${prop}`);
  }
  else{
    console.log(`Inherited:${prop}`);
  }
}

class User{
  constructor(name){
    this.name=name;
  }
  sayHi(){
    console.log(this.name);
  }
}
let user=new User("John");
user.sayHi();

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`${this.make} ${this.model}'s engine started.`);
  }
}
class Car extends Vehicle {
  constructor(make, model, year, numberOfDoors) {
    super(make, model, year);
    this.numberOfDoors = numberOfDoors;
  }

  openTrunk() {
    console.log(`${this.make} ${this.model}'s trunk is now open.`);
  }
}

const mycar=new Car('Maruthi suzuki','celerio',2019,4);
mycar.startEngine();
mycar.openTrunk();

