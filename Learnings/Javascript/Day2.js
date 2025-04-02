function showprimes(n){
    for(let i=2;i<n;i++){
      if(!isprime(i)) continue;
      console.log(i);
    }
  }
  function isprime(n){
    for(let i=2;i<n;i++){
      if(n%i==0){
        return false;
      }
    }
    return true;
  }
  showprimes(6);
  let val1=1.23455;
  if(!Math.trunc){
    Math.trunc=function(val1){
    return val1<0?Math.ceil(val1):Math.floor;
    };
  }
  console.log(Math.trunc(val1));
  let user2=new Object();
  user2.isAdmin=true;
  user2.name="Alice";
  user2.age=23;
  console.log(user.age);
  delete user.age;
  console.log(user.age);
  user2["does he like birds"]=true;
  console.log(user2["does he like birds"]);
  let fruit="apple";
  // let bag={
  //   [fruit]:5
  // };
  let bag={
    [fruit+"computers"]:5
  }
  console.log(bag.applecomputers);
  let veg="carrot";
  let vegbag={};
  vegbag[veg]=6;
  console.log(vegbag.carrot);
  console.log(vegbag[veg]);
  /*function makeuser(name,age){
    return{
      name: name,
      age: age
    }
  }  
  let userdetails=makeuser("john",20);
  console.log(userdetails);*/
  function makeuser(name,age){
    return{
      name,
      age
    };
  }
  let userdetails=makeuser("alice",20);
  console.log(userdetails);
  let obj={
    for:3,
    let:"indhu",
    return: 3,
    0:true
  };
  console.log(obj);
  console.log(obj.return);
  console.log(obj["0"]);
  console.log(obj.nosuchproperty===undefined);
  console.log("nosuchproperty" in obj);
  console.log(fruit in bag);
  console.log(veg in vegbag);
  console.log(obj.let);
  
  let obj2={
    test:undefined
  };
  console.log("test" in obj2);
  // let obj3={
  //   test,
  // };
  // console.log("test" in key);
  console.log(obj2.test);
  for(let key in obj){
    console.log(key);
    console.log(obj[key]);
  }
  let codes={
    "41":"germany",
    "42":"America",
    "1":"India",
    "3":"Pakistan"
  };
  for(let code in codes){
    console.log(code);
  }
  console.log(typeof +49);
  let message="hello";
  let phrase=message;
  console.log(phrase);
  let admin={ 
     firstname:"john"
  };
  let User=admin;
  User.name="aruna";
  console.log(admin.name);
  const list1={
    name:"aruna",
    age:23,
  };
  // list1={
  //    name:"saru",
  // age:23
  // }
  // console.log(list1.name);
  list1.name="saru";
  console.log(list1.name);
  let clone={};
  for(let key in list1){
    clone[key]=list1[key];
  }
  console.log(clone.name+" "+clone.age);
  Object.assign(list1,admin,{isadmin:true});
  console.log(list1);
  let details = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  }; 
  let clone1=Object.assign({},details);
  clone1.sizes.width=30;
  console.log(details.sizes.width);
  let clone2=structuredClone(details);
  console.log(details.sizes==clone2.sizes);
  clone2.sizes.width=20;
  console.log(details.sizes.width);
  function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
    return {
      father: man,
      mother: woman
    }
  }
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });
  console.log(family);
  outer:for(let i=0;i<3;i++){
    label2:for(let j=0;j<2;j++){
      console.log(j);
      for(let k=0;k<2;k++){
        if(i==0 && j==0 && k==1){
        continue label2;
        }
        else{
          console.log("hello");
        }
      }
    }
  } 