const express = require('express');
const router = express.Router();
const moment = require('moment');

const controller = require('../controller/blockChain');

const allowedDays = 'UuMmTtWwRrFfSs';

router.get('/', (req, res) => {
	// get all messages for this week and day
	// send text messages
	const year = moment().year();
	const week = moment().week();
	const weekString = `${year}${week}`;
	controller.getMessagesByWeek(weekString).then(response => {
		res.json({ response: response.val(), week: weekString })
	});
});

router.post('/:week', (req, res) => {
	const week = req.params.week;
	if (parseInt(week.substring(2, 4)) > 52) {
		res.statusCode = 400;
		res.json({ message: 'Week provided is invalid', status: 400 });
	}

	const note = req.body.note || 'BLANK NOTE';

	controller.createNote(note, week);
	res.json({ message: 'Note has been saved', status: 200 });
});

router.post('/:week/days/:day', (req, res) => {
	const week = req.params.week;
	const day = req.params.day;
	if (!day || day.length > 1 || !allowedDays.includes(day)) {
		res.statusCode = 400;
		res.json({message: 'Day provided is invalid', status: 400});
	}
	if (parseInt(week.substring(2, 4)) > 52) {
		res.statusCode = 400;
		res.json({message: 'Week provided is invalid', status: 400});
	}

	const note = req.body.note || 'BLANK NOTE';
	
	controller.createNote(note, week, day);
	res.json({ message: 'Note has been saved', status: 200 });
});

router.delete('/:week', (req, res) => {

});

router.delete('/:week/days/:day', (req, res) => {

});

module.exports = router;
