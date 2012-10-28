//Name: Lazaro Regalado
//Created for: SDI 1211
//SDI-Project1

alert("JavaScript works!");

//Variables assignments

var alarmRings = 5;
var timeToWakeUp = "i wake up at 5:00 am";
var conSleeping = "continue sleeping.";
var makeCoffee = "let\'s make some coffee.";
var drivingTimeInMins = 35;
var accidents = false;

//Output of variables
console.log("If my alarm doesn't ring at 5:00 am, i " + conSleeping);
console.log("If my alarms rings " + alarmRings + ", then, " + timeToWakeUp + " and i tell my self " + makeCoffee);
console.log("It takes me " + drivingTimeInMins + " to get to work if no accidents in the highway");


//Conditional statements

if (alarmRings === 5) {
	console.log(timeToWakeUp);
        console.log(makeCoffee);
} else {
	console.log(conSleeping);
};    
if(accidents === true) {
	console.log("It\'s going to take me more than " + drivingTimeInMins + " minutes to get to work")
} else {
	console.log ("I will make it to work in about " + drivingTimeInMins);
	
};
 






