'use strict';

var implementation = require('./implementations');

module.exports = function getPolyfill() {
	return implementation;
};
