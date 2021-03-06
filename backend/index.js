const mongoose = require('mongoose');
require('dotenv').config({path:'.env'});
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
    console.error(error.message);
});

require('./src/models/Url');
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(process.env.PORT);

