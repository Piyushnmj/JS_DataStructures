//Dice Roll
let maxcount = 0;
var dictMap = new Map();
let value = 0;
while(maxcount < 10)
{
    //Roll a dice
    let dice = Math.floor(Math.random()*6)+1;
    console.log("Dice Rolled: "+dice);
    value = 1;
    //Check whether dict has dice
    if(dictMap.has(dice))
    {
        value = dictMap.get(dice) + 1;
    }
    //Set value to dictionary
    dictMap.set(dice, value);
    if (value > maxcount)maxcount = value;
}

let max = 0;
let min = 11;
let minkey, maxkey = 0;
//Iterate over Dictionary and print
for(let [key,value] of dictMap)
{
    if(value > max)
    {
        max = value;
        maxkey = key;
    }
    if(value < min)
    {
        min = value;
        minkey = key;
    }
    console.log("Key: " + key + ", Value = " + value);
}
console.log("Key with Max Value: " + maxkey + "\nKey with minimum value: " + minkey);