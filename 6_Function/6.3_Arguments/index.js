//Arguments
let x = 1;
x= 'a';

function sum(a, b){
//    console.log(arguments);
    return a + b; 
}
console.log(sum(1,2));
console.log(sum(1));
console.log(sum());
console.log(sum(1, 2, 3, 4));
console.log(sum([]));
console.log(sum({}));
console.log(sum('1','1'));

// -------------------------

function sum(){
    let total = 0;
    for(let value of arguments){
        total += value;
    }
    return total;
}
console.log(sum[1, 2, 3, 4, 5, 6]);

