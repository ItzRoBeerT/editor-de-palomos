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
		const pigeon = await Pigeon.findOne({
			ring: ring,
		}).exec();
		res.status(200).send({ pigeon });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.post('/pigeon/search', auth, async (req, res) => {
	const search = req.body.search;

	try {
		const filteredPigeons = await Pigeon.find({
			$or: [
				{ ring: { $regex: search, $options: 'i' } },
				{ name: { $regex: search, $options: 'i' } },
			],
		}).exec();

		res.status(200).send({ filteredPigeons });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.patch('/pigeon/update', auth, async (req, res) => {
	try {
		const newPigeon = req.body.pigeon;
		const pigeon = await Pigeon.findOne({ ring: newPigeon.ring });
		if (!pigeon) return es.status(404).send({ error: 'No se encontró el palomo a modificar' });

		Object.keys(newPigeon).map((update) => (pigeon[update] = newPigeon[update]));
		await pigeon.save();

		res.status(200).send({ pigeon });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

module.exports = router;
