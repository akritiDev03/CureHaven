import express from "express";           // Server framework
import mongoose from "mongoose";         // MongoDB ORM
import multer from "multer";              // File upload handling
import bcrypt from "bcrypt";              // Password hashing
import { v2 as cloudinary } from "cloudinary"; // Cloud image storage
import cors from "cors";                  // Cross-Origin Resource Sharing
import 'dotenv/config';              // Environment variables
import jwt from "jsonwebtoken";           // Authentication tokens
import validator from "validator";        // Input validation
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json()); 
app.use(cors());


//api endpoints
app.use('/api/admin',adminRouter)


app.get('/',(req,res)=>{
   res.send('API WORKING') 
})

app.listen(port,()=>console.log("Server started",port))











