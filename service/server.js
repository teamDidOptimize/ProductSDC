// setup middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(compression());
// app.use(morgan('dev'));

app.use(express.static('public'));

app.use('/loaderio-4fbca929fd9abf7d5919d8a7ef6b2210.txt', (req, res) => {
  res.status(200).send('loaderio-4fbca929fd9abf7d5919d8a7ef6b2210');
});

// setup database connections
const mongoose = require('mongoose');
const databaseName = 'productSDC';
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName, user: process.env.DB_USER, pass: process.env.DB_PASS, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// set initial routes
app.use('/products', productsRouter);

// setup port listening
app.listen(process.env.PORT || 3000);

module.export = db;