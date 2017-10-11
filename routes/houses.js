const express = require('express');
const router = express.Router();
const blockChain = require('./controller/blockChain');
const hashBlock = require('./lib/hashBlock');

// TODO: add a method to get all points for a house
// TODO: add a method to get all points across houses
// TODO: add a method to add points to a house
router.post('/:house', (req, res) => {
	const points = parseInt(req.body.points);
	const blockChain.getLastBlock(req.params.house).then(data => {
		const newData = {
			points,
			userId: 'test'
		};
		blockChain.createBlock(hashBlock(data, newData), req.params.house);
	});
});
