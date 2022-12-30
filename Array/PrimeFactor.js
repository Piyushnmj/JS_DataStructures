//Prime Factor
var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter the number: "));
let factNumber = number;
let result = new Array();
while (number % 2 == 0)
{
    number /= 2;
    result.push(2);
}
for (var i = 3; Math.sqrt(i) <= number; i++)
{
    while (i % 2 != 0 && number % i == 0)
    {   
        number /= i;
        result.push(i);
    }
}
console.log("Factors of number " + factNumber + " = " + result.join(" "));