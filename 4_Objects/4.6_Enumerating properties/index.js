//enumerating properties
const circle = {
    radius: 1,
    draw: function(){
        console.log("drawing...");
    },
};

for (let key in circle){
    console.log(key, circle[key]);
}


for (let key of Object.keys(circle)){
    console.log(key);
}


for (let entry of Object.entries(circle)){
    console.log(entry);
}


const keys = Object.keys(circle);
console.log(keys);



if('radius' in circle)
    console.log('circle has a radius');
