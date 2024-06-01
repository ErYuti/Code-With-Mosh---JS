//for loop
//initialExpression ; condition ; incrementExpression
for(let i = 0; i < 5; i++){
    console.log('yuti ' + i);
}

//odd number
console.log('odd number:')
for (let i = 0; i <=10; i++){
    if(i %2 !== 0 )
    console.log(i);
}

console.log('odd number:')
for (let i = 10; i >=1; i--){
    if(i %2 !== 0 )
    console.log(i);
}

// =============================

//while
console.log('While loop');
let i = 0;
while(i <= 5){
    if(i % 2 !== 0){
        console.log(i);
    }
    i++;
}

// =================================

//do-while loop
console.log('do-while loop');
let a =0;
do {
    if(a % 2 !== 0){
        console.log(a);
    }
    a++;
}while(a <= 5)
