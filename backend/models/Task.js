const { STRING, BOOLEAN } = require('sequelize');
const { db } = require('../config/db');

const Task = db.define(
	'task',
	{
		task: { type: STRING, allowNull: false },
		finished: { type: BOOLEAN, allowNull: true },
	},
	{ createdAt: 'created_at', updatedAt: false, indexes: [{ fields: ['id'] }] }
);

module.exports = Task;
