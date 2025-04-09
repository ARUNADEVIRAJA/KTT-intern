let user={
    name:"Aruna",
    money:2000,
    [Symbol.toPrimitive](hint){
     
        console.log(`hint=${hint}`);
        return hint=="string"?`{name:"${this.name}"}`:this.money;
    }
};
console.log(String(user));
console.log(+user);
console.log(user+500);

let obj={
    getAdder:()=>{
        return (x,y)=>x+y;
    }
};
let adder=obj.getAdder();
console.log(adder(5,3));

console.log(user);
console.log(user.valueOf());

user={
    name:"saru",
    money:2000,
    toString(){
        return this.name;
    },
    valueOf(){
        return this.money;
    }
};
console.log(String(user));
console.log(+user);
console.log(user+500);

obj={
    name:"vicky",
    valueOf(){
        return 4;
    },
 toString(){

        return {name:"saru"};
    }
};
console.log(obj.toString());
console.log(obj*2);
console.log("2"+2);
console.log(obj+2);

obj={
    name:"vicky",
   toString(){
        return "2";
    }
};
console.log(obj+2);

obj={
    a:5,
    b:28,
    sayHi:function(){
        return this.a+this.b;
    },
    valueOf(){
        return this.sayHi();
    }
};
console.log(+obj);
let str="Hello";
console.log(str.toUpperCase());
let n=323.465829;
console.log(n.toFixed(3));

let zero=new Number(0);
if(zero){
    console.log(zero);
}
let num=334.23;
console.log(parseInt(num.toString().slice(0,2)));
console.log(Math.floor(334.67));
console.log(Math.ceil(334.0001));
console.log(Math.round(334.5));
console.log(Math.trunc(-1.109));

let billion=1_000_000_000;
console.log(billion);
billion=1e9;
console.log(billion);
console.log(7.3e9);
 let mcs=1e-6;
 console.log(mcs);
 console.log(1.23e-6);  //1.23/1000000

 let a=0b11111111;
 let b=0o377; 
 console.log(a==b);
a=255;
console.log(a.toString(16));

console.log(a.toString(2));

console.log(123456..toString(36));

console.log(1e500);
         
console.log(0.1+0.2==0.3);

let sum=0.1+0.2;
sum=sum.toFixed(1);
console.log(sum==0.3);
console.log(sum===0.3);

console.log(isNaN(NaN));
console.log(isNaN("NaN"));
console.log(isNaN(Infinity));

console.log(isFinite(1e500));
console.log(isFinite("15"));
console.log(isFinite(Infinity));
console.log(isFinite("str"));

console.log("str"/2);
console.log(Number.isNaN("str"));
console.log(isNaN(str));

console.log(isFinite("123"));
console.log(Number.isFinite("123"));
console.log(Number.isFinite(2/0));
console.log(Number.isFinite(Infinity));

console.log(Object.is(0,-0));
console.log(Object.is(NaN,NaN));

console.log(Number("100px"));

console.log(parseInt("100px"));
console.log(parseFloat('12.5em'));
console.log(parseFloat('12.3.4'));
console.log(parseInt("as123"));

console.log(parseInt('0xff',16));
console.log(parseInt('ff',16));

console.log(Math.max(3,5,-10,0,1));
console.log(Math.min(1,2));
console.log(Math.pow(2,5));


function add(a,b){
    return a+b;
 }
 console.log(`sum of a and b is ${add(2,3)}.`);

let Quotes=`Quotes:
   single quotes
   double quotes
   backticks
 `;
 console.log(Quotes);

 Quotes="Quotes:\n single quotes\n double quotes\n backticks";
 console.log(Quotes);

console.log(String(obj).length);
console.log(`Hii\n\t `.length);
console.log(String(obj).at(0));
let word="welcome";
console.log(word.at(-2));
console.log(word.at(word.length-1));
console.log(word[-1]);

for(let char of word){
    console.log(char);
}

word="Hi";
word='h'+word[1];
console.log(word);
console.log(word[0].toUpperCase());

let str1="String indexOf() method";
console.log(str1.indexOf("in"));
console.log(str1.indexOf("in",3));
console.log(str1.indexOf("in",4));

let target='in';
let pos=0;
while(true){
    let foundpos=str1.indexOf(target,pos);
    if(foundpos==-1) break;
    console.log(`Found at ${foundpos}`);
    pos=foundpos+1;
}

console.log(str1.lastIndexOf(target));

console.log(str1.includes("index"));
console.log(str1.includes("index",4));
console.log(str1.startsWith("Str"));
console.log(str1.endsWith("hod"));

console.log(str1.slice(0,2));
console.log(str1.slice(2));
console.log(str1.substring(6,2));
console.log(str1.substr(-4,2));
console.log(str1.substring(-2,3));
let a1=[1,2,3,4,5];
delete a1[1];
console.log(a1[1]);
console.log(a1[2]);
a1[100]=10;
console.log(a1.length);

let start=0;
let size=0;
for(i=0;i<a1.length;i++){
    if(a[i]!==undefined){
        a1[start++]=a1[i];
        size++;
    } 
}
a1.length=size;
console.log(a1.length);