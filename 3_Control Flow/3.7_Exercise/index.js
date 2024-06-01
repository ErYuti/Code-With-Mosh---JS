//write a function that takes two number and return the maximum of the two
function maximumNum(num1, num2) {
  if (num1 < num2) {
    return console.log(num2);
  } else {
    return console.log(num1);
  }
}
console.log("maximum of the two: ");
maximumNum(4, 4);

// ------------------------------------

function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log("maximum of the two: ");
let maxi = max(10, 6);
console.log(maxi);

// =====================================
//write a landscape function that takes two parameter width and height , if image landscape than return true otherwise false
function landscape(width, height) {
  return width > height ? "True" : "False";
}
console.log("Is image is landscape:");
let image = landscape(310, 620);
console.log(image);

// -----------------------------------------

function landscape(width, height) {
  return width > height;
}
console.log("Is image is landscape:");
let img = landscape(400, 250);
console.log(img);

// =====================================
//write a fizzbuzz function take input
//divisible by 3 => fizz
//divisible by 5 => buzz
//divisible by both 3 & 5 => fizzbuzz
//not didvisible by 3 or 5 => input
//not a number => ' not a number

function fizzBuzz(input) {
  if (typeof input !== "number") {
    return "Not a number";
  } else if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else {
    return console.log(input);
  }
}
console.log("FizzBuzz function: for checking number is fizbuzz or not");
let output = fizzBuzz(3);
console.log(output);

// ------------------------------

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return console.log(input);
}





// =====================================
//write a checkspeed function take paramenter speed
//speed Limit =70 => ok
//5km -> 1point
//more than 12 point -> license suspened

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmperPoint = 5;
  if (speed <= speedLimit + kmperPoint) console.log("OK");
  else {
    let points = Math.floor((speed - speedLimit) / kmperPoint);
    if (points >= 12) {
      console.log("License suspened");
    } else {
      console.log(points + " : Point is added");
    }
  }
}
console.log("checkspeed function:");
checkSpeed(71);

// ----------------------------------------

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmperPoint = 5;
  if (speed <= speedLimit + kmperPoint) {
    console.log("OK");
    return;
  }
  let points = Math.floor((speed - speedLimit) / kmperPoint);
  if (points >= 12) console.log("License suspened");
  else console.log(points + " : Point is added");
}



//=========================================
function showNumbers(limit){
  for(let i = 0; i <= limit; i++){
    if(i % 2 === 0) console.log(i,'EVEN Number')
    else console.log(i,'ODD Number')
  } 

  // const msg = (i % 2 === 0) ? 'EVEN' : 'ODD';
  // console.log(i, msg);
}
let n =10;
console.log(`Show number even or odd between 0 to ${n}:`)
showNumbers(n);



// ========================================
//Falsy - undefined, null, '', false, 0, NaN
// write a function that Count only Truthy value, and skip the falsy value
function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
console.log("Count only Truthy value:");
const array = [undefined, null, "", 12, false, 0, NaN, 2, 5];
console.log(countTruthy(array));




// ==========================================
//only show properties that are string
function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, ":", obj[key]);
  }
}

const object = {
  name: "yuti",
  lastname: "meher",
  age: 23,
  roll_no: 123,
  position: "software developer",
};
console.log("Only show properties that are string: ");
showProperties(object);




// ===============================================
//sum of muliplies 3 and 5
//multiples of 3 : 3,6,9
//multiples of 5 : 5,10
function sum(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}
console.log(sum(10));




//==============================================
//write a function that caluclate the grade of student with marks
//calculate the Average makrs and compare with the garde
//0-59 : F, 60-69: D , 70-79:C, 80-89:B, 90-100:A
function CalculateGrade(student) {
  const avg = calculateAverage(student);
  if (avg < 60) return "F"; // if(avg >= 59 && avg <=59) return 'F';
  if (avg < 70) return "D"; // if(avg >= 60 && avg <=69) return 'D';
  if (avg < 80) return "C"; // if(avg >= 70 && avg <=79) return 'C';
  if (avg < 90) return "B"; // if(avg >= 80 && avg <=89) return 'B';
  return "A"; // if(avg >= 90 && avg <=100) return 'A';
}

function calculateAverage(marks) {
  let sum = 0;
  for (let value of marks) sum += value;
  return sum / marks.length;
}

console.log("Grade of student: ");
let marks = [80, 90, 88, 87];
console.log(CalculateGrade(marks));




// ==============================================
function ShowStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let draw = '';
    for (let i = 0; i < row; i++) 
      draw += '*';
    console.log(draw);
  }
}
console.log('Draw Stars Pattern: ')
ShowStars(5);




// ==================================================
//prime(whose factors are only 1 and itself)

//composite
//12 => 1,2,3,4,6,12
//can be divided evenly by its factors

//11 => 1,11
//13 => 1,13
function showPrimes(limit){
    for (let number = 2; number <= limit; number++)
        if(prime(number)) console.log(number);
}

function prime(number){
    for(let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}
let number = 10;
console.log(`This is prime number between 0 to ${number} :`)
showPrimes(number);