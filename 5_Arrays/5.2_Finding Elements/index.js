const numbers = [1, 2, 3, 4, 5, 1];

//Finding (primitives) Elements=>

console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(1));

//last indexof array
console.log(numbers.lastIndexOf(1));

//odd
console.log(numbers.indexOf(1) !== -1);
//new
console.log(numbers.includes(1));

//finding index of value
console.log(numbers.indexOf(1, 2))


// =====================================================================

const courses = [
    {id : 1, name : 'a'},
    {id : 2, name : 'b'},
];

//Finding (objects) Elements=>

console.log(courses.includes({id : 1, name : 'a'}));


let found = courses.find(function(course){
    return course.name === 'a';
});
console.log(found);


let found2 = courses.findIndex(function(course){
    return course.name === 'a';
});
console.log(found2);



// ====================================================
//Arrow function
const course = courses.find( course => course.name === 'a');
console.log(course)