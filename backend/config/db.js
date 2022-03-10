require('dotenv').config();
const { Sequelize } = require('sequelize');

const db = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB,
		operatorsAliases: false,
		pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
	}
);

const dbAuth = async () => {
	try {
		await db.authenticate();
		console.log('[+] DB Connected Successfully!');
	} catch (error) {
		console.log('[-] Error: ', error);
	}
};

module.exports = { db, dbAuth };
