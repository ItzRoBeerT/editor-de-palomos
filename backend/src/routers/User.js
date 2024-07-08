const express = require('express');
const User = require('../models/User');
const router = new express.Router();

router.post('user/createAccount', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		res.send('account created');
	} catch (error) {
		res.status(400).send({ error: e.message });
	}
});
module.exports = router;
