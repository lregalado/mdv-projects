//alert("JavaScript works!");
//Name: Lazaro Regalado
//Created for: SDI 1211
//SDI-Project3

// Global Variables
var alarmRings,
    roadAccidents, 
    roadClearOfAccidents,
    timeOfArrival,
    makeCoffee,
    arriveEarly,
    haveCoffee,
    currentTime = 6,
    clockIn;

//Procedure method
var alarm = {
    time: "5"};
    
    alarm.time = function () {
        for ( alarm.time in alarm) {
        console.log ("I wake up at 5:00 am ");  
            }

    return;
    };


alarm.time();

//Function Method
var road = {
    accidents: "false",
    
    }

    road.accidents = function () {
        for (road.accidents in road){
        console.log("I will make it to work on time");       
        }
    return road.accidents;
    };
    

road.accidents();


//Number function

var time = function(arrivalTime){
    do {(arrivalTime = 5)

    }
    while (arrivalTime ==  7 - 1  );
        return "too early";
     
};

timeOfArrival = time(6);
console.log("I arrived to work " + timeOfArrival);

//String function

var coffee = function([arrivedEarly, haveCoffee]){
    return ["I arrived early to work," + " let's have some coffee!"];
    
};

makeCoffee = coffee(arriveEarly + haveCoffee);
console.log("Today, " + makeCoffee);

//Array function

var clockIn = [1];

var startWorking = function(clockIn){
    for (var i = 0; i < clockIn; i++){
       console.log("It's 7:00 am ");  
    }
    
};

currentTime = startWorking(0);
console.log("It's not 7:00 am yet, let me not clock in");




