import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';





dotenv.config();
const app = express();
const PORT = process.env.PORT || 8181



app.use(cors());
app.use(cookieParser())
app.options('*', cors())
app.use(express.urlencoded({limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'}));

app.listen( PORT,  console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`) )
