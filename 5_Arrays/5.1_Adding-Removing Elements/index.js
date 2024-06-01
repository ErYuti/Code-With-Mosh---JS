const numbers = [3, 4];

//can't do this
// numbers = [];

//Adding Elements=>
//End
numbers.push(5, 6);
console.log(numbers);


//Beginning
numbers.unshift(1, 2);
console.log(numbers);


//Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

// ==================================


//Removig Elements=>
//End
numbers.pop(5, 6);
console.log(numbers);


//Beginning
numbers.shift(1, 2);
console.log(numbers);


//Middle
numbers.splice(2, 1);
console.log(numbers);





