const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

const app = express();

//seting up config.env
dotenv.config({path : './config/config.env'});

//connect db
connectDatabase();

//setup body parser
app.use(express.json());

//creating onw middleware
// const middleware = (req, res, next) => {
//     console.log('Hello from middleware.');
//     //setting up user variable globally
//     req.user = 'TaiL';
//     req.requestMethod = req.method;
//     next();
// };
//
// app.use(middleware);


//importing all routes
const jobs = require('./routes/jobs');
app.use('/api/v1', jobs);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

