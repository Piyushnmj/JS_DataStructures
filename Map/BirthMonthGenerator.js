//Birth Month Generator
let maxcount = 50;
var dictMap = new Map();
let value = 0
while(--maxcount != 0)
{
    let month = Math.floor(Math.random() * 12) + 1;
    console.log("Individual : " + maxcount + ", Month is: " + month);
    value = new Array();

    if(dictMap.has(month))
    {
        value = dictMap.get(month);
    }
    value.push(maxcount);
    dictMap.set(month, value);
}
for(let [key,value] of dictMap)
{
    console.log("Month: " + key + ", Individual = " + value);
}