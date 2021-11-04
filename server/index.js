// src: "Full Stack MERN Project" https://www.youtube.com/watch?v=ngc9gnGgUdA&t=7s

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { config } = require('dotenv');
const { getTasks, addTask, doneTask, initTask } = require('./controllers/taskController.js');
const { createUser, loginUser } = require('./controllers/userController.js');
config();

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.post('/login', loginUser);
app.post('/create', createUser);

app.post('/tasks', getTasks);
app.post('/addTask', addTask);
app.post('/delete/:id', doneTask);
app.post('/initTask/:id', initTask);



app.all('*', (_req, res) => res.json({ message: 'Esta aplicação não possui esta rota' }))

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
