import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import Routes from './server/route.js';
import Connection from './database/db.js';

const app = express();

dotenv.config();

// Parse JSON and urlencoded data from requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

// Use the defined routes
app.use('/', Routes);

const PORT = process.env.PORT || 8080;

// Establish database connection
Connection();

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`);
});
