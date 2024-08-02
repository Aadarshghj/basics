
"use strict"
const ps = require("prompt-sync");
const prompt = ps();
function confirm(promptText) {
    const response = prompt(`${promptText} (yes/no): `);
    return response.toLowerCase() === 'yes';
}
for( let i=0;i<15;i++)
    { if(i>0)
       {
           continuef();
       
        }
        else if(i==0)
        {
            evenodd();
        }
       
    }
    function evenodd()
    {
      //  let s=prompt();
         
        console.log("enter the number")
     
        var s=prompt();
        if(s%2==0)
        {
            console.log("The no " +s+ " is even")
        }
        else
        
            {
    console.log("The no " +s+ " is odd")
            } 
    }
           function continuef()
          {
            
      let response = confirm("Do you want to continue?");
      if (response) {
        // code to execute if user wants to continue
        console.log("Continuing...");
         
        evenodd();
        
      } else {
        // code to execute if user doesn't want to continue 
          console.log("Exiting...");
   
      }
          }