/*
How it works:
1. Create a function.
2. Write methonds (functions) to the Protorype (!) of that  function.
3. Create instances (variables) from that function.
4. Modify prototype (can do it runtime!) to affect all instances.
5. Modify certain instance if needed.

*/

var Car = function() {};

Car.prototype.honk = function() {
	console.log('honk honk');
};

var myCar1 = new Car();
var myCar2 = new Car();

myCar1.honk();
myCar2.honk();

Car.prototype.honk = function() { // changing prototype method runtime
	console.log('meep meep');
};

myCar1.honk();
myCar2.honk();

Car.prototype.drive = function() {
	console.log('vroom...');
};

myCar1.drive();
myCar2.drive();

myCar2.honk = function() { // changing method of certain object runtime
	console.log('meep meep Car 2');
};

myCar1.honk();
myCar2.honk();