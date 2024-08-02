"use strict"
const ps = require("prompt-sync");
const prompt = ps();

for( let i=0;i<15;i++)
    { console.log("enter the number")
        //let s=prompt();
        evenodd();
    }
    function evenodd(ev)
    {
        let s=prompt();
        if(s%2==0)
        {
            console.log("The no " +s+ " is even")
        }
        else
        
            {
    console.log("The no " +s+ " is odd")
            }
    }