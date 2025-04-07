let nums=[1];
nums.unshift(0);
nums.push(2);
nums.push(3,4,5);
console.log(nums);
nums.shift();
console.log(nums);
nums.pop();
console.log(nums);
nums[9999]=100;
nums.age=45;
console.log(nums);
console.log(nums.length);
nums.pop();
console.log(nums);
console.log(nums.length);
nums.shift();
console.log(nums.length);

let array1=[1,2,3];
array1.push(4);
console.log(array1);
array1.pop();
console.log(array1);
array1.shift();
console.log(array1);
array1.unshift(0);
console.log(array1);


let arr=["id1","id2","id3","id4"];
for(let id of arr){
    console.log(id);
}
arr.name="aruna";
console.log(arr);
for(let id of arr){
    console.log(id);
}

for(let id in arr){
    console.log(id);
}
nums.length=3;
for(let num of nums){
    console.log(num);
}
console.log(nums[3]);
arr.length=0;
arr=new Array("id1","id2","id3");
console.log(arr);
let narr=new Array();
console.log(narr.length);
narr.length=0;
console.log(narr.length);
let matrix=[[1,2,3],
            [4,5,6],
            [7,8,9]];
console.log(matrix[1][2]);
console.log([]+1);
console.log([1]+1);
console.log([1,2]+2);
console.log([]==[]);
console.log([0]==[0]);
console.log(0==[]);
console.log('0'==[]);

let arr1=[1,2,3,4,5];
let arr2=[1,2,3,3,5];
console.log(arr1==arr2);
let ans=true;
for(let val in arr1){
    if(arr1[val]!=arr2[val]){
            ans=false;
    }
}
console.log(ans);
arr1.push(function(){
   return this;
})
console.log(arr1[5]());
console.log(typeof arr1);
console.log(Array.isArray(arr1));
let arr3=["I","study","javascript"];
let removed=arr3.splice(0,2,"I","like");
console.log(removed);
console.log(arr3);
arr3.splice(3,0,"I","study","javascript");
console.log(arr3);
let arr4=[1,2,3,4];
arr4.splice(-1,0,5,6);
console.log(arr4);
arr4.splice(0,0,-1,-2,-3);
console.log(arr4);

console.log(arr4.slice(1,3));
console.log(arr4);
console.log(arr4.slice(-2));

console.log(arr4.concat([7,8]));
console.log(arr4);
console.log(arr4.concat(9,10));

let arrayLike={
    o:"something",
    length:1,
};
console.log(arr4.concat(arrayLike));
arr4.splice(arr4.length,0,arrayLike)
arr.forEach((item,index,array)=>{
    console.log(`${item} found at index ${index} in the array ${array}`);
});
console.log(arr.indexOf("id2"));
console.log(arr.indexOf("id2",2));
console.log(arr.includes(1));
arr.push(NaN);
console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));


let users=[{id:1,name:"John"},
           {id:2,name:"krish"},
           {id:3,name:"vicky"},
           {id:4,name:"john"},
];
console.log(arr.includes({id:2,name:"krish"}));
let user1=users.find(item=>item.id==2);
console.log(user1.name);

let user2=users.findLastIndex(user=>user.name=="john");
console.log(user2);

let userslist=users.filter(item=>item.id<3);
console.log(userslist.length);

let vals=[1,2,3,4];
vals[20]=100;
console.log(vals.length);
 for(let i=vals.length-1;i>=0;i--){
    if(!(i in vals)){
        vals.splice(i,1);
    }
 }
console.log(vals.length);

let index=["Arrays","Map","function"].map(item=>item.indexOf('a'));
console.log(index);

console.log(vals.reverse());

let names="sam,swe,indhu";
let nameArray=names.split(',');
for(let i of nameArray){
    console.log(i);
}

let str=nameArray.join(';');
console.log(str);

let list1 = [
    { name: "Aruna", age: 20 },
    { name: "vicky", age: 19 },
    { name: "partha", age: 18 }
  ];

  console.log(list1[2].age);
  for(let name of list1){
     console.log(name.name+" is"+name.age+" years old");
  }
  let student = {
    name: "Aruna",
    marks: [85, 90, 88],
    hobbies: ["planting","dancing"]
  };
  console.log(student.marks[1]);
  for(let hobby of student.hobbies){
    console.log(hobby);
  }
  let employees = [
    {
      name: "Aruna",
      skills: ["Java", "HTML", "SQL"]
    },
    {
      name: "pavi",
      skills: ["Python", "c"]
    }
  ];
  console.log(employees[1].skills[0]);

  for(let emp of employees){
    console.log(emp.name+"'s skills:");
     for(let skill of emp.skills){
        console.log(skill+" ");
     }
  }

  employees[1].skills.push("Node js");
  console.log(employees[1].skills);

  let person1=list1.find(item=>item.name=="partha");
  console.log(person1);


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


