//array destructuring (serial matters. destructured index-wise)
const numbers = [34,65];
// const x = numbers[0];
// const y = numbers[1];

// const [x,y] = [34,65];

const [x,y] = numbers;
//console.log(x,y);

function boxify(num1,num2){
    const nums  = [num1, num2];
    return nums
}

// console.log(boxify(23,34))


const student = {
    name: "Shakib Khan",
    age: 32,
    movies:["king kong", "dhakar mastan"]
}
// const [firstMovie, secondMovie] = ["king kong", "dhakar mastan"];

const [firstMovie, secondMovie] = student.movies;
// console.log( [firstMovie, secondMovie]);



//object destructuring (serial doesnt matter)

// const {name, age} = {name: "alu", age:34}
// const {name, age} = {name: "salu", age:14, id: 12}

const students = {
    name1: "Shakib Khan",
    age: 32,
    movies:["king kong", "dhakar mastan"],
    
}
const {name1} =  students
const [movie1, movie2] = students.movies;
console.log([movie1])
console.log([movie2])

