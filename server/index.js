import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import memberRoutes from './routes/members.js';
//initialize the app
const app = express();

//using cors headers
app.use(cors());

app.use(bodyParser.json({liimt: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use('/members',memberRoutes);

const CONNECTION_URL = 'mongodb+srv://celticcodes:celticcodes1@celticcodes.1ghqukh.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))).catch((error) => console.log(error));