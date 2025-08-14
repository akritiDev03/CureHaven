import express from "express";           // Server framework
import mongoose from "mongoose";         // MongoDB ORM
import multer from "multer";              // File upload handling
import bcrypt from "bcrypt";              // Password hashing
import { v2 as cloudinary } from "cloudinary"; // Cloud image storage
import cors from "cors";                  // Cross-Origin Resource Sharing
import 'dotenv/config';              // Environment variables
import jwt from "jsonwebtoken";           // Authentication tokens
import validator from "validator";        // Input validation


//app config
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(express.json()); 
app.use(cors());


//api endpoints
app.get('/',(req,res)=>{
   res.send('API WORKING') 
})

app.listen(port,()=>console.log("Server started",port))