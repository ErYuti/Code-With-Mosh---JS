//every()
//checking for every value in arrays match with criterion
const numbers = [1, 2, 3, ];
const allPositive = numbers.every((value)=>{
    return value >= 0;
});
console.log(allPositive);



//some()
//check atleast one criterion matching with given criterion
const numbers1 = [1, 2, 3, -1,];
const atLeastOnePositive = numbers.some((value)=>{
    return value >= 0;
});
console.log(atLeastOnePositive);