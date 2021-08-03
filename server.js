const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

//app.use(cors());

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));

var productsRouter = require('./routes/products');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/products', productsRouter);

let user = process.env.MONGO_USER_NAME;
let pass = process.env.MONGO_USER_PASS;
let dbname = "shop-demo-react"
let connectionString = `mongodb://${user}:${pass}@localhost:27017/${dbname}?authSource=admin`


//mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// listen for requests
app.listen(3100, () => {
    console.log("Server is listening on port 3100");
});

