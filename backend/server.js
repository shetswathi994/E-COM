import 'dotenv/config'


import express from 'express'
import cors from 'cors'

import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productroute.js'

import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()
const port = process.env.PORT || 4000

connectDB()
await connectCloudinary()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  exposedHeaders: ['x-rtb-fingerprint-id', 'request-id'],
}));

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)
app.get('/', (req, res) => {
  res.send("API Working")


})
app.listen(port, () => {
  console.log("Server started on PORT: " + port);
});

