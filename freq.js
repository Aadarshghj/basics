"use strict"
const ps = require("prompt-sync");
const prompt = ps();

console.log("enter the size of array");
let n= prompt();
var arr=[];
for(let i=0;i<n;i++)
{
console.log("enter the array");
  let s= prompt();
   arr[i]=s;
  
}
var count=0;
var counts=0;
let freEle

console.log(arr);
for( let i=0;i<n;i++)
{ let count=0;
    for( let j=0;j<n;j++)
    {
       if (arr[i]==arr[j])
        count++;
    }
    if (count>counts)
      {
         counts=count;
         
//console.log(counts);
         freEle=arr[i];
         //console.log(arr[i]);
      }
}

console.log("count is " +counts+ " && Element is ");
console.log(freEle);