//let vs var 

//global variable and - window object
console.log(y);
var y = 0;

// ------------

console.log(x);
let x = 0;


// =====================

function start(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
    // console.log(i);
}
start();


// --------------------------------
function stop(){
    for(var i=0; i < 5; i++){
        console.log(i);
        if(true){
            var color = 'red';
            let color1 = 'red';
        }
    }
    console.log(i);
    console.log(color);
    console.log(color1);

}
stop();

// ---------------------------------
