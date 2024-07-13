const express = require('express');
const Pigeon = require('../models/Pigeon');
const router = new express.Router();
const auth = require('../middleware/auth');

router.post('/pigeon/add', auth, async (req, res) => {
	const userId = req.user._id;
	const newPigeon = {
		...req.body,
		userId,
	};
	const pigeon = new Pigeon(newPigeon);
	try {
		await pigeon.save();

		res.status(200).send({
			message: 'Pigeon added!',
			pigeon,
		});
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.post('/pigeon/get', auth, async (req, res) => {
	const ring = req.body.ring;

	try {
		const pigeon = await Pigeon.find({
			ring: ring,
		}).exec();
		res.status(200).send({ pigeon });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

module.exports = router;
