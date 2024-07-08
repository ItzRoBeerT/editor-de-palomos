const express = require('express');
const User = require('../models/User');
const router = new express.Router();

router.post('/user/createAccount', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		res.status(200).send({
			message: 'Account created!',
			user,
		});
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

module.exports = router;
