const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for ( let n of numbers)
    sum += n;
console.log(sum);

//reducing method
// acc=0 , curr=1 => acc =1
// acc=1 , curr=2 => acc =3
// acc=3 , curr=3 => acc =6
// acc=6 , curr=4 => acc =10
// acc=10 ,curr=5 => acc =15


const suming = numbers.reduce((acc, curr) => {
    return acc+ curr;
}, 0);

console.log(suming);

