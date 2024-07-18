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

router.delete('/pigeon/delete', auth, async (req, res) => {
	try {
		const pigeonRing = req.body.ring;
		const pigeon = await Pigeon.findOne({ ring: pigeonRing });

		if (!pigeon) {
			return res.status(404).send('No se ha encontrado el palomo a eliminar.');
		}
		//buscar en los palomos si su father o mother es este palomo
		const relatedPigeons = await Pigeon.find({
			$or: [{ father: pigeon._id }, { mother: pigeon._id }],
		});

		if (relatedPigeons.length > 0) {
			for (const relatedPigeon of relatedPigeons) {
				if (relatedPigeon.father === pigeon.ring) {
					relatedPigeon.father = '';
				}
				if (relatedPigeon.mother === pigeon.ring) {
					relatedPigeon.mother = '';
				}
				await relatedPigeon.save();
			}
		}

		// Verificar si el usuario autenticado es el dueño del palomo
		const user = req.user;
		if (!user || user._id.toString() !== pigeon.userId.toString()) {
			return res.status(403).send('No tienes permiso para eliminar este palomo.');
		}

		await Pigeon.deleteOne({ ring: pigeonRing });

		res.status(200).send({message: 'Palomo eliminado exitosamente.'});
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

module.exports = router;
