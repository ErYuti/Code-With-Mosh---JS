//Array from range we pass as parameter(min, max)
function arrayFromRange(min, max) {
  let outputArray = [];
  for (let i = min; i <= max; i++) {
    outputArray.push(i);
  }
  return outputArray;
}
const max = 0;
const min = 10;
console.log(`Array Range ${max} to ${min} :`);
const numbers = arrayFromRange(max, min);
console.log(numbers);










// ===================================================

//Write function take array and search element,
//search for element present in array or not and return a output true and false
function includes(array, searchElement) {
  // return array.includes(searchElement);
  for (let element of array) {
    if (element === searchElement) {
      return true;
    }
  }
  return false;
}
console.log(includes([-1, 2, 7, 10], 0));








// ======================================================
//Write function take array and excluded element,
//if given element not in array it except that number from array
function exceptFromArray(array, except) {
  let outputArray = [];
  for (let element of array) {
    if (!except.includes(element)) {
      outputArray.push(element);
    }
  }
  return outputArray;
}
console.log(exceptFromArray([1, 2, 3, 4, 4, 5, 2], [1, 2]));









//============================================================
// moving an elemnets
function movingArray(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid Offset..");
    return;
  }
  let outputArray = [...array];
  let element = outputArray.splice(index, 1)[0];
  outputArray.splice(position, 0, element);
  return outputArray;
}
console.log(movingArray([1, 2, 3, 4], 0, 1));








//============================================================
//count Occurrences element from given array and count and produces output
function countOccurrences(array, searchElement) {
  // let count = 0;
  // for (let element of array){
  //     if( element === searchElement ){
  //         count ++;
  //     }
  // }
  // return count;
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    //    console.log(accumulator, current, occurrence);
    return accumulator + occurrence;
  });
}
console.log(countOccurrences([1, 1, 2, 3, 1, 1], 1));








// ============================================================
//when given array is empty show undefined
//otherwise show maximum value from array
function getMax(array) {
  if (array.length === 0) return undefined;

  //   let max = array[0];
  //   for (let i = 1; i < array.length; i++) {
  //     if (array[i] > max){
  //         max = array[i];
  //     }
  // }
  //   return max;
  return array.reduce((acc, curr) => (curr > acc ? curr : acc));
}
console.log(getMax([10, 21, 33, 45, 500, -1, 0]));






// ================================================================
const movies = [
  { title: "a", year: 2018, rating: 4 },
  { title: "b", year: 2018, rating: 2.5 },
  { title: "c", year: 2011, rating: 5 },
  { title: "d", year: 2000, rating: 4 },
  { title: "e", year: 2018, rating: 4.9 },
];

const moviesWithTitle = movies
   .filter(movie => movie.year === 2018 && movie.rating >=4)
   .sort((a, b) => a.rating - b.rating )
   .reverse()
   .map(movie => movie.title);

console.log(moviesWithTitle);