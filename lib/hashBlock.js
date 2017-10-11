'use strict';

const sha256 = require('crypto-js/sha256');

const flattenData = data => {
	let hashMap = "";
	Object.keys(data).forEach(key => {
		hashMap += data[key] + ':';
	});
	return hashMap.slice(0, -1);
};

module.exports = ({ index, timestamp, data, previousHash }) => {
	const flatData = flattenData(data);
	return sha256(`${index}${timestamp}${flatData}${previousHash}`).toString();
};
