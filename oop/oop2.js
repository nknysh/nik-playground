/*
In JS, inheritance is implemented through the chain of prototypes.
*/

var Vehicle = function() {};

Vehicle.prototype.drive = function () {
	console.log('vroooom...');
};

var Car = function() {};

Car.prototype = new Vehicle();

Car.prototype.honk = function() {
	console.log('honk honk');
}

var myCar = new Car();

myCar.honk();
myCar.drive();