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
	const id = req.body.id;

	try {
		const pigeon = await Pigeon.findOne({
			_id: id,
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
		const pigeon = await Pigeon.findOne({ _id: newPigeon._id });
		
		if (!pigeon) return res.status(404).send({ error: 'No se encontró el palomo a modificar' });

		Object.keys(newPigeon).map((update) => (pigeon[update] = newPigeon[update]));
		await pigeon.save();

		res.status(200).send({ pigeon });
	} catch (error) {
		console.log(error);
		
		res.status(500).send({ error: error.message });
	}
});

router.post('/pigeon/capture', auth, async (req, res) => {
	const { pigeonId, capture } = req.body;

	try {
		const pigeon = await Pigeon.findById(pigeonId);
		if (!pigeon) return res.status(404).send({ message: 'El palomo no fue encontrado' });

		if (!capture || !capture.date || !capture.owner || !capture.ring || !capture.feather) {
			return res.status(400).send({ message: 'Faltan campos en la captura' });
		}

		pigeon.captures.push(capture);

		await pigeon.save();
		res.status(200).send(pigeon);
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.get('/pigeon/:pigeonId/captures/:year', auth, async (req, res) => {
	const { pigeonId, year } = req.params;

	try {
		const pigeon = await Pigeon.findById(pigeonId);
		if (!pigeon) {
			return res.status(404).send('El palomo no fue encontrado');
		}

		const captures = pigeon.captures.filter(
			(capture) => new Date(capture.date).getFullYear() === parseInt(year, 10)
		);

		res.status(200).send({ captures });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.get('/pigeon/years', auth, async (req, res) => {
	const user = req.user;
	try {
		const pigeons = await Pigeon.find({
			userId: user._id,
		});

		const years = new Set();

		pigeons.forEach((pigeon) => {
			pigeon.captures.forEach((capture) => {
				const captureYear = new Date(capture.date).getFullYear();
				years.add(captureYear);
			});
		});

		const uniqueYears = Array.from(years).sort((a, b) => a - b);

		res.status(200).send({ years: uniqueYears });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
});

router.delete('/pigeon/delete', auth, async (req, res) => {
	try {
		const id = req.body.id;
		const pigeon = await Pigeon.findOne({ _id: id });

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

		await Pigeon.deleteOne({ _id: id });

		res.status(200).send({ message: 'Palomo eliminado exitosamente.' });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

router.delete('/pigeon/deleteCapture', auth, async (req, res) => {
	const { pigeonId, captureId } = req.body;

	try {
		const pigeon = await Pigeon.findById(pigeonId);
		if (!pigeon) {
			return res.status(404).send('El palomo no fue encontrado');
		}

		const captureIndex = pigeon.captures.findIndex(
			(capture) => capture._id.toString() === captureId
		);
		if (captureIndex === -1) {
			return res.status(404).send('La captura no fue encontrada');
		}

		pigeon.captures.splice(captureIndex, 1);
		await pigeon.save();

		res.status(200).send({ message: 'Captura eliminada exitosamente' });
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

module.exports = router;
