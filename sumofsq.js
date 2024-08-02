"use strict"
const ps = require("prompt-sync");
const prompt = ps();
var arr=[];
console.log("enter the size");
let n=prompt();
for( let i=0;i<n;i++)
{
  console.log("enter the elements to array") ;
  let s=prompt();
  arr[i]=s;
}
console.log(arr);
let array=[];

for( let i=0;i<n;i++)
{ let a= arr[i];
  let s=a*a;
  array[i]=s;
}
console.log("sqaured array is " +array);
var ad=0;
for( let i=0;i<n;i++)
{ 
    
    ad+=array[i];
    console.log(ad);
    
}
  console.log("sum total is "+ad+"");