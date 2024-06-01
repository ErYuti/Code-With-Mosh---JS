// local scope 
function start(){
    const message = 'hi';
    if(true){
        const another = 'bye';
    }
    console.log(another);
}
start();
console.log(message);




// --------------------------


{
    const message = 'hi';
}
console.log(message);




// -----------------------



for(let i=0; i < 5; i++){
    console.log(i);
}
console.log(i);





// ===============================
//global scope
const color = 'red';

function run(){
    const color = 'blue'
    console.log(color);
}
console.log(color);
run();