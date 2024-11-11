import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoute  from "./routes/UserRoute";



const PORT = 5000;

mongoose
    .connect(process.env.MONGO_URL as string)
    .then(() => console.log('Connected to DB'))
    .catch((error) => console.log('Error connecting to DB:', error))


const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/my/user', userRoute)


app.get('/test', async (req: Request, res: Response) => {
    res.json({ message: 'Hello' })
});

app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`)
})