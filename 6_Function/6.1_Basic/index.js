//function declartions vs function expressions

//function declartions
function walk(){
    console.log('Walking...');
}
walk();

// ---------------------

// Anonymous function expressions
let run = function (){
    return console.log('running...');
};
run();

// --------------------------

// Named function expressions
let runing = function walk(){
    return console.log('running...');
};
runing();



// =====================================
