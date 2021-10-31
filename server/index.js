// src: "Full Stack MERN Project" https://www.youtube.com/watch?v=ngc9gnGgUdA&t=7s

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import { getTasks, createTask } from './controllers/taskController.js'
import { loginUser } from './controllers/userController.js'
config();

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.get('/', getTasks);
app.post('/create', createTask);
app.post('/login', loginUser);

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
