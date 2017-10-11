const express = require('express');
const router = express.Router();

const allowedDays = 'UuMmTtWwRrFfSs';

router.get('/', (req, res) => {
	// get all messages for this week and day
	// send text messages
	res.json({ message: 'Reminders sent!' });
});

router.post('/:week', (req, res) => {
	const week = req.params.week;
	if (parseInt(week.substring(2, 4)) > 52) {
		res.statusCode = 400;
		res.json({ message: 'Week provided is invalid', status: 400 });
	}

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

	res.json({ message: 'Note has been saved', status: 200 });
});

router.delete('/:week', (req, res) => {

});

router.delete('/:week/days/:day', (req, res) => {

});

module.exports = router;
