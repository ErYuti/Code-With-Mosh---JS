//cloning an object
const circle = {
    radius: 1,
    draw(){
        console.log("drawing...");
    },
};

//odd method
const another ={};
for(let key in circle){
    another[key] = circle[key];
}
console.log(another);

// -----------------------


//new method
const another1 = Object.assign({}, circle);
console.log(another1);

// --------------------------


//ES6 method- speard operators(...)
const another2 = {...circle};
console.log(another2)
