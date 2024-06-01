//Rest Operator
function sum(...args){
    console.log(args);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ------------------------

function sum1(args){
    console.log(args);
}
console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//-----------------------

function suming(...args){
    return args.reduce((a,b)=> a+ b);
}
console.log(suming(1, 2, 3, 4, 5, 6));

// -------------------------

function shop(discount, ...prices){
    const total = prices.reduce((a,b)=> a + b);
    return total * (1 - discount)
}
console.log(shop(0.1, 20, 30, 1));