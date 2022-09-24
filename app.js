require('dotenv').config();
const express = require('express')
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');


const productRouter = require("./src/routes/ProductApi");


//Security Middleware Import
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')
const mongoose = require('mongoose');

//Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({ limit: "50mb" }));

//rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter);

// Mongodb database connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hutxm2z.mongodb.net/cvs_file_reader?retryWrites=true&w=majority`;

// const uri = "mongodb://127.0.0.1:27017/gadget_ecommerce";
let option = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1, autoIndex: true }
mongoose.connect(uri, option, (err) => {
    if (!err) {
        console.log("Database connected successfully")
    }
    else {
        console.log("Database connection fail")
    }
});

//managing backend routing

// productRouter

app.use("/api/v1", productRouter);



app.get('/', (req, res) => {
    res.send("Hi Dad....I am running")
})

// undefined route
// app.use("*", (req, res) => {
//     res.status(404).send({ status: "failed", result: "Not found.." })
// })



module.exports = app;