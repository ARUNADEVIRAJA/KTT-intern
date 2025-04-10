let map=new Map();
  map.set('1','str1');
  map.set(1,'num1');
  map.set(true,'bool1');
  console.log(map.get(1));
  console.log(map.size);
console.log(map.get(true));
  let person2={name:'john'};
  map.set(person2,123);
  console.log(map.get(person2));

  let activeUsers=new Map();
  activeUsers.set("Aruna",{status:"online",lastseen:null});
  activeUsers.set("Pavi",{status:"offline",lastseen:Date()});
  for(let [username,info] of activeUsers){
    console.log(username,info.status);
  }
console.log(activeUsers);


let obj1={id:1};
let obj2={id:2};
let role=new Map();
role.set(obj1,"admin");
role.set(obj2,"user");
for(let [key,val] of role){
    console.log(`id value is ${key.id}`, val);
}

for(let val of activeUsers.keys()){
    console.log(val);
}
for(let val of activeUsers.values()){
    console.log(val);
}
for(let val of activeUsers.entries()){
    console.log(val);
}

let obj={
    name:"john",
    age:22
};
let map2=new Map(Object.entries(obj));
console.log(map2);

let array1=[1,2,3];
array1.push(4);
console.log(array1);
array1.pop();
console.log(array1);
array1.shift();
console.log(array1);
array1.unshift(0);
console.log(array1);

let obj3={
    name:"Aruna",
    age:20,
    clg:"bit",
    dep:"AI&DS"
};
console.log(Object.keys(obj3));
let objmap=new Map();
objmap.set("name","Aruna");
objmap.set("age",2);
objmap.set("clg","BIT");
objmap.set("dep","AI&DS");
console.log(objmap.keys());
let obj2map=new Map(Object.entries(obj3));
console.log("obj2map",obj2map);
let john={name:"john"};
let ben={name:"ben"};
map.keys();

let prices=Object.fromEntries([
    ["Mobile",1],
    ["Laptop",2],
    ["speaker",4]
]);
console.log(typeof prices);
console.log(prices);
console.log(prices.Mobile);
delete prices["speaker"];
console.log(Object.keys(prices).length);

console.log(objmap.size);
objmap.delete("age");
console.log(objmap.size);
let myMap=new Map();
myMap.set("name","Aruna");
myMap.set("age",20);
myMap.set("skills",["js","java","sql"]);
console.log(myMap.get("skills")[1]);
console.log(myMap.has("age"));
myMap.delete("age");
console.log(myMap.size);

for(let [key,value] of myMap){
    console.log(key,value);
}
myMap.clear();
console.log(myMap.size);

//Set
let set=new Set();
set.add("val1");
set.add("val2");
set.add(1);
set.add({name:"aruna"});
console.log(set.size);
console.log(set.values());

let set1=new Set([1,2,3,4,"Hello","hi","welcome",{dep:"EEE"}]);
for(let val of set1){
    console.log(val);
}
set1.forEach((value,valueAgain,value2,set)=>{
    console.log("forEach",value,valueAgain);
});
console.log(set.entries());
console.log(set1.has(4));


function unique(arr){
   let set=new Set(arr);
   return set;
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
console.log(unique(values));


function aclean(arr){
    let map=new Map();
    for(let word of arr){
       let sorted=word.toLowerCase().split('').sort().join();
       map.set(sorted,word);
    }
    return Array.from(map.values());
}
let arr=["nap","teachers","cheaters","PAN","ear","hectares"];
console.log(aclean(arr));

let person1={name:"john"};
let array=[person1];
person1=null;
console.log(array);
console.log(person1);

person1={name:"john"}
let mp=new Map();
mp.set(person1,"...");
person1=null;
console.log(mp);
console.log(mp.size);

person1={name:"john"};
let weakMap=new WeakMap();
weakMap.set(person1,"...");
console.log(weakMap.get(person1));

let visitedSet=new WeakSet();

let John = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(John);
visitedSet.add(pete);
visitedSet.add(mary);
visitedSet.add(John);
console.log(visitedSet.has(John));


let prices1 = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    
    Object.entries(prices1).map(entry => [entry[0], entry[1] * 2])
  );
  
console.log(doublePrices.meat);

//Destructing assignment
let arr1=["john","smith"];
let [firstname,surname]=arr1;
console.log(firstname,surname);

let [emp1,emp2]="Alice Bob".split(' ');
console.log(emp1,emp2);

let [firstName, ,title]=["syed","fazil","friends","clg"];
console.log(firstName,title);

let [a,b,c]="abc";
let [one,two,three]=new Set([1,2,3,4]);
console.log(a, b, c);
console.log(one, two, three);
let user={};
[user.firstname,user.lastname]="Syed fazil".split(' ');
console.log(user.firstname,user.lastname);

const entries=[[1,2],[3,4],[5,6]];
const user1=Object.fromEntries(entries);
console.log(user1);

let guest="jane";
let admin="pete";

[guest,admin]=[admin,guest];
console.log("guest name is",guest,"and admin name is",admin);

let [name1,name2,...rest]="“the rest” using three dots".split(' ');
console.log(name1+" "+name2);
console.log(rest[0]);
console.log(rest.length);

let [name="Guest",Surname="Anonymous"]=["julius"];
console.log(name);
console.log(Surname);

let options = {
    Title: "Menu",
    width: 100,
    height: 200
  };
//   let {Title, width, height} = options;
//   console.log(Title,width);

//   let {height,Title, width} = options;
//   console.log(Title,width);

let {Title, ...rem} = options;
console.log(rem.height);  
console.log(rem.width);

//Date and time
let now=new Date();
console.log(now);
let date=new Date("2025-04-08");
console.log(date);

//json
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json);
  
  console.log(json);
let val=JSON.stringify([1, 2, 3]) ;
console.log(val);
console.log(typeof val);

let user2 = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };

 console.log(JSON.stringify(user2, null, 5));

let numbers="[0,1,2,3,4]";
numbers=JSON.parse(numbers);
console.log(numbers[2]);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log( meetup.date.getDate() );
let users = [
  { id: 1, name: "runadevi" },
  { id: 2, name: "Asha" },
  {id: 3,name:"Asha"} 
];
let names=users.map(u=>u.name);
let user3 = users.find(u =>u.name.startsWith("A"));
console.log(user3);
user3=names.find(u=>u.startsWith("A"));
console.log(user3);
console.log(names);
console.log(users);   
