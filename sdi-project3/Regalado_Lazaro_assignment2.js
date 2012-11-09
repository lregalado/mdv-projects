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

//Accessor Method

