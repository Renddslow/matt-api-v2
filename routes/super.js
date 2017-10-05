const express = require('express');
const router = express.Router();

router.get('/:value', (req, res) => {
	const value = req.params.value;
	const data = {
		thing: req.query.thing,
		action: req.query.action,
		position: req.query.position,
		resource: req.query.resource
	};
	let message = "";
	if (value > 4000) {
		message = highValueMessage(data);
	} else if (value > 1000) {
		message = valueMessage(data);
	} else {
		message = noValueMessage(data);
	}
	res.json({message});
});

const highValueMessage = ({thing, action, position, resource}) => {
	const _thing = thing || '<thing>';
	const _action = action || '<action>';
	const _position = position || '<position>';
	const _resource = resource || '<resource>';
	return `The ${_thing} will decrease ${_action} time in a very meaningful way and potentially make onboarding new ${_position} less painful. Additionally, the fiscal cost of ${_resource} will likely decrease as a result of this. Further the adoption of this ${_thing} will make us more hipster.`;
};

const valueMessage = ({ thing, action }) => {
	const _thing = thing || '<thing>';
	const _action = action || '<action>';
	return `The ${_thing} will descrease ${_action} time in a fairly significant way. Further the adoption of this ${_thing} will make us more hipster.`;
};

const noValueMessage = ({ thing, action }) => {
	const _thing = thing || '<thing>';
	const _action = action || '<action>';
	return `The adoption of ${_thing} will make us more hipster and perhaps even decrease ${_action} time, though the latter is unsubstantiated.`;
};

module.exports = router;
