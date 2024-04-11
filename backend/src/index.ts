import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { ResolveFnOutput } from 'module';
import mongoose from 'mongoose';


mongoose
    .connect(process.env.MONGO_URL as string)
    .then(() => console.log('Connected to DB'))


const app = express()
app.use(express.json())
app.use(cors())

const PORT = 5000;
app.get('/test', async (req: Request, res: Response) => {
    res.json({ message: 'Hello' })
});

app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`)
})