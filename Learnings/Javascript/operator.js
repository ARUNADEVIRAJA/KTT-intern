let user={
    name:"saru",
    age:23,
    dep:"mech",
    clg:{
       name:"skct",
       loc:"cbe"
    }
};
let clone=structuredClone(user);
console.log(clone.clg);
console.log(user.clg);
console.log(user.clg===clone.clg);
user.clg.loc="kovaipudur";
console.log(clone.clg.loc);
console.log(user.clg.loc);
let user1={};
user1.me=user1;
let cln=structuredClone(user1);
console.log(cln.me===cln);

user.sayhi=function(){
    console.log("hello");
};
user.sayhi();
function sayhi(){
    console.log("Hello!");
}
user.sayhi=sayhi;
user.sayhi();

user={
    sayHi(){
        console.log("hi hello");
    }
}
user.sayHi();
console.log(user.sayHi);

// user={
//     name:"john",
//     age:30,
//     sayhi:function(){
//         console.log(user.name);
//     }
// }
// let admin=user;
// user=null;
// console.log(admin.sayhi());

user={
    name:"john",
    age:30,
    sayhi:function(){
        console.log(this.name);
    }
}
let admin=user;
user=null;
console.log(admin.sayhi());
admin.sayhi();
console.log(admin.name);

function sayhi(){
     console.log(this.name);
}
user={
    name:"sridhar"
};
admin={
    name:"admin"
};
user.f=sayhi;
admin.f=sayhi;

user.f();
admin.f();

sayhi();

function makeuser(){
    return {
        name:"aruna",
        ref:this
    };
}
user=makeuser();
function makeuser(){
    return this;
}
console.log(typeof user);
user=makeuser();
console.log(typeof user);

function User(name){
      this.name=name;
      this.isAdmin=true;
}

User=new User("Tamizhini");
console.log(User.name);
console.log(User.isAdmin);

user=new function(){
    this.name="john";
    this.isAdmin=false;
};
console.log(user.name);

function Adduser(name){
    if(!new.target){
        return new Adduser(name);
    }
    this.name=name;
}
let fname=Adduser("john");
console.log(fname.name);
 function Addadmin(name){
    if(new.target) this.name=name;
 }
 console.log(Addadmin("Aadhira"));
 console.log(new Addadmin("Aadhira"));

 function BigUser(){
    this.name="john";
    return{
        name:"saru"
    };
 }
 console.log(new BigUser().name);

 function SmallUser(){
    this.name="john";
    return;
 }

 console.log(new SmallUser().name);

 function Admin(name){
    this.name=name;
    this.sayhi=function(){
        console.log("My name is: "+this.name);
    }
 }

let john=new Admin("john");
john.sayhi();
console.log(john);

// console.log(User.address.street);
console.log(User.address?User.address.street:undefined);
console.log(User.address && User.address.street && User.address.street.name);
console.log(User.address?.street);

let userAdmin={
    admin(){
        console.log("I am admin");
    }
};
let userGuest={};
userAdmin.admin?.();
userGuest.admin?.();

let key="firstname";

let User1={
    [key]:"john"
};

let User2={};

console.log(User1?.[key]);

console.log(User2?.[key]);

console.log(User2.firstname);

let id=Symbol("id");
console.log(id);

let Admin1={
    name:"john"
};

{
    let id1=Symbol("id");
    Admin1[id1]="Block scope id";
}
let id1=Symbol("id");
Admin1[id1]="Global scope id";

console.log(Admin1);
console.log(Object.keys(Admin1));
console.log(Object.getOwnPropertySymbols(Admin1));

let id3=Symbol.for("id");
let id4=Symbol.for("id");
console.log(id3==id4);
console.log(id3,id4);
console.log(Symbol.keyFor(id3));