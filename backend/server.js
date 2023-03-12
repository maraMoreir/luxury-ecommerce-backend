import express from "express";
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';
import sliderRouter from './routes/sliderRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log(err.message);
})

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/seed/', seedRouter);
app.use('/api/products/', productRouter);
app.use('/api/category/', categoryRouter);
app.use('/api/slider/', sliderRouter);
app.use('/api/users/', userRouter);
app.use('/api/orders/', orderRouter);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

//products
app.get('/api/products', (req, res) => {
    res.send(data.products)
});

//slider
app.get('/api/slider', (req, res) => {
    res.send(data.sliderItems)
});


//category
app.get('/api/category', (req, res) => {
    res.send(data.category)
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})