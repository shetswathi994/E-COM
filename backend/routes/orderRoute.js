import express from 'express';
import { placeOrder, PlaceOrderStripe, PlaceOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay } from "../controllers/orderController.js";
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';
const orderRouter = express.Router()
//Admin routes

orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, PlaceOrderStripe)
orderRouter.post('/razorpay', authUser, PlaceOrderRazorpay)
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)


// User Features
orderRouter.post('/userorders', authUser, userOrders)

//verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)

export default orderRouter


