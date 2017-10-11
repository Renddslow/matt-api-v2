const hashBlock = require('./hashBlock');
const moment = require('moment');

module.exports = (previousBlock, data) => {
	const newBlock = {
		index: previousBlock.index + 1,
		previousHash: previousBlock.hash,
		data,
		timestamp: moment().unix()
	};
	newBlock.hash = hashBlock(newBlock);
	return newBlock;
};
