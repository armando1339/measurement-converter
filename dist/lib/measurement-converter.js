"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function kgToLi() {
	var amountKg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	var li = 2.2046;
	return (amountKg * (1 / li)).toFixed(4);
};

function liToKg() {
	var amountLi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	var li = 2.2046;
	return (amountLi * (li / 1)).toFixed(4);
};

exports.kgToLi = kgToLi;
exports.liToKg = liToKg;