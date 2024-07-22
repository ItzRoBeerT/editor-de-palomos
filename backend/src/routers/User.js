const express = require('express');
const User = require('../models/User');
const Pigeon = require('../models/Pigeon');
const auth = require('../middleware/auth');
const router = new express.Router();

router.get('/test', async (req, res) => {
	try {
		res.status(200).send({ message: 'Test para el editor de palomos!' });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.post('/user/createAccount', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		res.status(200).send({
			message: 'Account created!',
			user,
		});
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.post('/user/login', async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.email, req.body.password);
		const token = await user.generateAuthToken();
		res.send({ user, token });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.post('/user/logout', auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
		await req.user.save();
		res.send('logged out');
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.get('/user/me', auth, async (req, res) => {
	try {
		if (!req.user) {
			return res
				.status(404)
				.send({ error: "The authenticated user's profile could not be found" });
		}
		res.send({ user: req.user });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.get('/user/getPigeons', auth, async (req, res) => {
	try {
		const userId = req.user._id;
		const pigeons = await Pigeon.find({
			userId: userId,
		}).exec();
		const pigeonsInCatching = await Pigeon.find({
			userId: userId,
			isCatching: true,
		});
		res.status(200).send({
			pigeons,
			total: pigeons.length,
			isCatchingTotal: pigeonsInCatching.length,
		});
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

module.exports = router;
