let myarray=[12,23,11,19,55,27,32,16]
myarray=[...myarray,22,67,89]
console.log(myarray)

function printSum(...args)
{
    let x=0;
    for(let n of args)
    {
        x+=n
    }
    console.log(x)

}
printSum(12,23,11,19,55,27,32)

