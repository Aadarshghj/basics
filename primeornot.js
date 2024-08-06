"use strict"
const ps = require("prompt-sync");
const prompt = ps();

console.log("Enter the size of the array:");
let n = prompt();
//console.log(n);
let arr=[];

for (let i = 0; i <n; i++) {
    console.log("enter the element");
  let s = prompt();
  arr[i] = s;
}

console.log(arr);
let p = arr[0];
console.log(p);
if(p==0||p==1)
{
  console.log("The first number is neither prime nor composite");
}
else {
var f=0;
for (let i = 2; i<p; ++i) {
   
let j=p%i;
console.log(j);
if(j==0){
    f=1; 
//console.log("hai");
}
}
}
if(f!=0)
{
console.log("  not  prime");
}
else {
console.log("  prime");
}
