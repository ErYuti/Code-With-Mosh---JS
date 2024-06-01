//switch...case

let role = "programmer";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  case "programmer":
    console.log("Programmer User");
    break;

  default:
    console.log("Unknown User");
}

//using if-else

if(role === 'guest'){
    console.log("Guest User");
}
else if(role === 'moderator'){
    console.log("Moderator User");
}
else if(role === 'programmer'){
    console.log("Programmer User");
}else{
    console.log("Unknown User");
}
