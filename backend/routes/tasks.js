const express = require('express');
const { db } = require('../config/db');
const Task = require('../models/Task');

const router = express.Router();

router
	.route('/')
	.get(async (req, res) => {
		try {
			const allTasks = await Task.findAll();
			res.json(JSON.stringify(allTasks));
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	})
	.post(async (req, res) => {
		try {
			const newTask = await Task.create(req.body);
			res.sendStatus(201);
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	});

router
	.route('/:id')
	.delete(async (req, res) => {
		try {
			const deletedTask = await Task.destroy({ where: { id: req.params.id } });
			res.sendStatus(204);
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	})
	.put(async (req, res) => {
		try {
			const updatedTask = await Task.update(req.body, {
				where: { id: req.params.id },
			});
			res.sendStatus(204);
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	});

module.exports = router;
