'use strict';

var isLong = require('../requestHandlers').isLong;
var isValid = require('../requestHandlers').isValid;
var greet = require('../requestHandlers').greet;

describe('greet', function() {

	it('Should greet Nik', function() {
		expect(greet('Nik')).toEqual('Hello Nik!');
	});

	it('Should greet dude if undefined', function() {
		expect(greet()).toEqual('Hello dude!');
	});

	it('Should greet dude if empty string', function() {
		expect(greet('')).toEqual('Hello dude!');
	});

});

describe('isLong', function() {

	it('Should return true if 20 chars', function() {
		expect(isLong('12345678901234567890')).toEqual(true);
	});

	it('Should return false if 19 chars', function() {
		expect(isLong('1234567890123456789')).toEqual(false);
	});

	it('Should return false if undefined', function() {
		expect(isLong()).toEqual(false);
	});

});

describe('isValid', function() {

	it('Should return true if contains valid', function() {
		expect(isValid('this is a valid one!')).toEqual(true);
	});

	it('Should return false if does not contain valid', function() {
		expect(isValid('does not contain what we need')).toEqual(false);
	});

	xit('Should return false if undefined', function() {
		expect(isValid()).toEqual(false);
	});

});