//contional statements

//if hour is between 6 am to 12 pm: good morning!
//if hour is between 12 pm to 4 pm: good afternoon!
//if hour is between 4 pm to 8 pm: good evening!
//otherwise : good night!

let hour = 24;
if (hour >= 6 && hour < 12) {
    console.log('good morning!');
}
else if (hour>=12 && hour < 16 ){
    console.log('good afternoon!');
}
else if (hour>= 16 && hour < 20 ){
    console.log('good evening')
}
else{
    console.log('good night!');
}