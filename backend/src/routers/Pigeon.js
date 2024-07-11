const express = require('express');
const Pigeon = require('../models/Pigeon');
const router = new express.Router();

router.post('/pigeon/add', async (req, res) => {
	const pigeon = new Pigeon(req.body);
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

module.exports = router;
