//combininig Arrays
//primitive value - value are copy : input and ouput are not effect bcz they value are copy
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);


//slicing arrays
const slice = combined.slice(2, 4);
console.log(slice);

const slice2 = combined.slice(2);
console.log(slice2);

const slice3 = combined.slice();
console.log(slice3);


//Reference type - reference address are copy : input and ouput are effect bcz they refer same array
const array1 = [{ id : 1}];

const add = array1.concat(second);
console.log(add);

// -----------------

add[0].id = 10;
console.log(add);


// ============================
//ES6- sperad operators
const newArray = [...first,'a', ...second];
console.log(newArray);

const copy =  [...newArray];
console.log(newArray);