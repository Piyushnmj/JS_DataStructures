//Repeated Numbers
var array = new Array();
for(var i = 0; i < 100; i++)
{
    var splittedval = i.toString().split("");
    if(splittedval[0] == splittedval[1])
    {
        array.push(i);
    }
}
array.forEach(element => {
    console.log(element);
});