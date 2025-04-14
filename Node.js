const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});   

function fetchdata(callback){
       setTimeout(()=>{
        callback("Data fetched using callback");
       },3000);
}
fetchdata((data)=>{
console.log(data);
});

let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
      resolve("Operation successful!");
  } else {
      reject("Operation failed!");
  }
});

myPromise
  .then(result => {
      console.log(result); 
  })
  .catch(error => {
      console.error(error); 
  });



