// for..in loop
const person ={
    name: 'yuti',
    age:23,
};

for ( let key in person){
    // console.log(key);
    console.log(key, person[key]);
}


const colors = ['red','green','blue'];

for (let index in colors){
    console.log(index, colors[index]);
}

//=============================

//for...of loop
for (let color of colors){
    console.log(color);
}
