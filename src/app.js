import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import transcriptionRoute from './routes/transcriptionRoute.js';

dotenv.config();

const app = express();

app.use(
    cors(),
    express.json({ limit: '100mb' }),
    express.urlencoded({ extended: true, limit: '100mb' })
);

app.use(transcriptionRoute);

export default app;