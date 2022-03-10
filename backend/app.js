require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { dbAuth } = require('./config/db');
const tasksRouter = require('./routes/tasks');

dbAuth();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/tasks/', tasksRouter);

app.all('/', (req, res) => {
	res.sendStatus(200);
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, console.log('Server started on port: ', PORT));
