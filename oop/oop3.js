var vehicle = {};

vehicle.drive = function () {
	console.log('vroooom....');
};

var car = Object.create(vehicle);

car.honk = function() {
	console.log('honk hink');
}

var myCar = Object.create(car);

myCar.honk();
myCar.drive();
