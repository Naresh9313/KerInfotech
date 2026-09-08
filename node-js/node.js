
// const fs= require('fs');
// fs.readFile('node.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);

// })



// fs.writeFile('node.txt', 'Hello Node.js', (err) => {
//     if (err) throw err;

//     console.log('File written successfully');
// });



// console.log('Naresh');
// setTimeout(()=>{
    
//     console.log('Hello');
// }, 3000);

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved');
//     }, 2000);
// }).then((message) => {
//     console.log(message);
// });

// console.log('Prajapati');



// const naresh = async () => {
// try{
//     throw new Error('This is an error');
// } catch (error) {
//     console.error(error.message);
// }
// }

// const http = require('http');


// http.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// }).listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });


const crypto = require('crypto');
const hash=crypto.createHash('sha256').update('Hello World').digest('hex');
console.log(hash);
