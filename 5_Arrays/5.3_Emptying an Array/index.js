let numbers = [1, 2, 3, 4];
let another = numbers;

// Emptying an Array

//solution1
// numbers = [];
// console.log(numbers);
// console.log(another);


//solution2 
// numbers.length = 0;
// console.log(numbers);
// console.log(another);


//solution3
// numbers.splice(0, numbers.length);
// console.log(numbers);
// console.log(another);


// solution4
while(numbers.length > 0)
numbers.pop()
console.log(numbers);
console.log(another);