function greetings(greetingHandler,name){
    greetingHandler(name);
}
// greetings("halim mama");
//const number = 45;
//const laptop = {price:45000, brand:"lenovo",memory: "8gb"}

function greetingHandler(name){
    console.log("Good Morning",name);

}

function greetEvening(name){
    console.log("Good Evening",name);
}

function  greetNight(name){
    console.log("Good Night",name);
}

//greetings(laptop);
greetings(greetingHandler, "Tom Hanks");
greetings(greetingHandler, "Tom Brady");
greetings(greetEvening, "Tom Soolaiman");
greetings(greetEvening, "Tom Salman");
greetings(greetNight,"Tom Rasel");