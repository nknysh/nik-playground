'use strict';

var requestHandlers = require('../requestHandlers.js');
var isLong = requestHandlers.isLong();

describe('isLong', function() {

	it('should return true for string of 20 chars', function() {
		expect(isLong('12345678901234567890').toEqual(true));
	});

	it('should return false for string of 19 chars', function() {
		expect(isLong('1234567890123456789').toEqual(false));
	});

});