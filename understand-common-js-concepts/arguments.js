function sum(a,b,c){
    //console.log(arguments);
    //to convert array-like objects to array
    const args = [...arguments];
    //console.log(args);
    const sum = a+b+c;
    return sum;
}

const total = sum(23,45,2,32,45);
//console.log(total);
console.log(sum.length);
