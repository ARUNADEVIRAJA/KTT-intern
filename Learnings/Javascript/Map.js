let map=new Map();
  map.set('1','str1');
  map.set(1,'num1');
  map.set(true,'bool1');
  console.log(map.get(1));
  console.log(map.size);

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
