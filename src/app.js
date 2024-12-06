import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import transcriptionRoute from './routes/transcriptionRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(transcriptionRoute);

export default app;