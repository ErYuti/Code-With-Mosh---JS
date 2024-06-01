const circle = {
    radius : 1
};

//adding property in object
circle.color ='red';
circle.draw = function(){
    console.log('drawing...');
}

//removing property in object
delete circle.color;

console.log(circle); 