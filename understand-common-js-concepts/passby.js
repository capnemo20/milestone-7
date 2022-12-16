let num1 = 4;
let num2 =10;

function multiply(a,b){
    a= 5;
    const result = a*b;
    return result;
}

// console.log(num1);
const output = multiply(num1,num2);
// console.log(output);


let student1 = {name:"Ananta", partner:"Barsha"};
let student2 = {name:"raj", partner:"Barsha"};

function makeMovie(couple1, couple2){
    couple1.name = "Jalil";
    couple2.partner = "mim";
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);