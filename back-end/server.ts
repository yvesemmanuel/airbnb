import express, { Request, Response } from 'express';
import cors from 'cors';

import UserRoutes from './src/routes/User.Routes';
import RentalRoutes from './src/routes/Rental.Routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(UserRoutes);
app.use(RentalRoutes);

app.get("/", (_: Request, response: Response) => {
    response.json({ "ping": "pong" });
});

app.listen(3333, () => {
    console.log("Server is running!")
});