if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// setup express server
const express = require('express');
const app = express();
const productsRouter = require('./routes/product.js');
const compression = require('compression');
// const morgan = require('morgan');

// setup middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(compression());
// app.use(morgan('dev'));

app.use(express.static('public'));

// setup database connections
const mongoose = require('mongoose');
const databaseName = 'productSDC';
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName, server: {reconnectTries: Number.MAX_VALUE}});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// set initial routes
app.use('/products', productsRouter);

// setup port listening
app.listen(process.env.PORT || 3000);

module.export = db;