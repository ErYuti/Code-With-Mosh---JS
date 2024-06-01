//Logical Operators
console.log('Logical Operators:');
//AND (&&)
//Return True if both operands are TRUE
console.log(true && true);
console.log(true && false);

//OR (||)
//Return True if one of the operands is TRUE
console.log(true || true);
console.log(true || false);

//NOT (!)
// true to false - opposite 

// ============================================

//Bitwise Operators
console.log('Bitwise Operators:');
//1 = 00000001
//2 = 00000010
//R = 00000011
//R = 00000000
console.log(1 | 2);
console.log(1 & 2);

// example
const readPremission = 4;
const writePremission = 2;
const executePremission = 1;

let myPremission = 0;
myPremission = myPremission | readPremission | writePremission;

let message = (myPremission & readPremission ? 'yes' : 'no')
console.log(message);


//Operators Precedence
let n = 2 + 3 * 4;
console.log(n);