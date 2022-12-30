//Sum of 3 integer adds to zero
var prompt = require("prompt-sync")();
console.log("Enter the number of elements to be stored");
var num = parseInt(prompt());
var array = new Array();
for(var i = 0; i < num; i++)
{
    array[i]=parseInt(prompt());
}
array.sort();
let flag = 1;
for (let i = 0; i < array.length ; i++) 
{
    for (let j = i+1; j < array.length ; j++) 
    {
        for (let l = j+1; l < array.length ; l++) 
        {
            if(array[i] + array[j] + array[l] == 0)
            {
                console.log("Found 3 elements whose sum is 0");
                console.log("Elements are: " + array[i] + " " + array[j] + " " + array[l]);
                flag = 0;
            }
        }
    }
}
if(flag == 1)
console.log("Did not find 3 elements whose sum is 0");