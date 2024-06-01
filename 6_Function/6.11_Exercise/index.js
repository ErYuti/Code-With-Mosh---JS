function sum(...items){
  if(items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];

  return items.reduce((a, b)=> a + b);
}
console.log(sum([1, 2, 3, 4, 5]));


// =======================================
const circle = {
  radius : 1,
  get area(){
    return Math.PI * this.radius * this.radius;
  }
};
console.log(circle.area);




// =========================================
function countOccurrences(array, searchElement) {
  if( Array.isArray(array))
    throw new Error ('Invalid Array');

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
   
    return accumulator + occurrence;
  });
}

try{
  const numbers = [1, 1, 2, 3, 1, 1];
  const count = countOccurrences(null, 1);
  console.log(count);
}
catch(e){
  console.log(e.message);
}