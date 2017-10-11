const express = require('express');
const router = express.Router();

const controller = require('../controller/blockChain');
const schemaCheck = require('../lib/schemaCheck');
const schema = require('../schemas/comics');

router.get('/:page', (req, res) => {
	const page = req.params.page;
	return controller.getComicsPage(page).then(response => {
		res.json(response.val());
	});
});

router.post('/', (req, res) => {
	const data = schemaCheck(req.body, schema.page);
	const pageNumber = controller.getLastPageNumber();
	return controller.createComicsPage(page, data).then(response => {
		res.json(response.val());
	});
});

module.exports = router;
