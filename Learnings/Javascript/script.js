console.log("hello");

let person1 = {
  name: "Alice",
  age: 25,
  isStudent: true
};

console.log(person1);

let person2 = new Object();
person2.name = "Alice";
person2.age = 25;
person2.isStudent = true;

console.log(person2);

delete person1.isStudent;
console.log(person1.isStudent); 

let car={
  brand:"Tesla",
  model: "Model s",
  start: function(){
    console.log("car started successfully!");
  }
};


car.start();

console.log(typeof 42);  

console.log(typeof "Hello");   

console.log(typeof true);  

console.log(typeof undefined); 

console.log(typeof null); 

console.log(typeof Symbol("id")); 

console.log(typeof BigInt(123));

console.log(typeof alert);
 
let id=Symbol();
console.log(id);
console.log(typeof id);

let id1=Symbol("userid1");
let id2=Symbol("userid2");
console.log(id1==id2);

let user={
  name:"john",
  age: 25,
};

let user_id=Symbol("id");

user[user_id]=1234;

console.log(user);

console.log(user[user_id]);

// console.log("id is"+ user_id);

console.log("id is"+user_id.toString());
let secretKey = Symbol("hidden");

let user1 = {
    name: "Alice",
    [secretKey]: "Sensitive Data"
};

console.log(Object.keys(user1)); 
console.log(user1[secretKey]);   

let value=true;
console.log(typeof(value));

value=String(value);

console.log(typeof value);

console.log("6"/"2");

let str="123";

let num=Number(str);

console.log(num);

console.log(typeof(num));

console.log( Number("   123   ") ); 
console.log( Number("123z") );      
console.log( Number(true) );       
console.log( Number(false) );
console.log(" ");

console.log(Boolean(1));

console.log(Boolean(0));

console.log(Boolean(""));
console.log(Boolean(" "));

console.log(Boolean("123"));
console.log(Boolean("0"));
console.log(Boolean(null));
console.log(Boolean(undefined));

function showMessage(){
  let message="hello";
  alert(message);
}
showMessage();
let username="john";
function display(){
    let message="hello"+username;
    alert(message);
}
display();
let username1="john";
function showMessage(){
    username1="bob";
    alert(username1);
}
alert(username1);
showMessage();
alert(username1);
function showMessage(from,text="no text given")
{
    alert(from+":"+text);
}
showMessage("Ann");
function showMessage(from,text="no text given")
{
    alert(from+":"+text);
}
showMessage("Ann","bob");
function checkAge(age3) {
  if (age3 >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age3 = prompt('How old are you?', 18);

if ( checkAge(age3) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
console.log(age3);
function displayres(){
  outer : for(let i=0;i<3;i++){
  for(let j=0;j<3;j++){
      if(i==0 && j==2){
          break outer;
      }
      else{
          alert(`the value of (${i},${j})`);
      }
  }
  }
}
  displayres();
  function sayhi(){
    alert("hello");
}
let func=sayhi;
func();
sayhi();
let result=(a,b)=>a+b;
alert(result(4,8));
let age=prompt("enter your age");
let welcome=(age<18)?
    ()=>alert("hello"):
    ()=>alert("Greetings");
welcome();
let ques=(question,yes,no)=>{
  if(confirm(question)){
      yes();
  }
  else{
      no();
  }
};
ques("do you agree",function(){ alert("you agreed");},
  function() {alert("you canceled the execution");} );
  alert(0==" ");
  let a=5;
let b=5;
alert(a===b);
alert("aruna"<="partha");
function displayres(){
  alert("hello");
}
let res=displayres();
let s=0;
if(res==undefined){
  s=1;
}
console.log(s);