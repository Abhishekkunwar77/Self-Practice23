const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

const productRoute = require('./api/routes/product');
const userRoute = require('./api/routes/user');
const categoryRoute = require('./api/routes/category');

const app = express();

// ✅ Updated MongoDB Connection String
const mongoURI = "mongodb+srv://Abhishek:55555@crudapp.i4vpy.mongodb.net/myDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// ✅ MongoDB Connection Handling
mongoose.connection.on('error', (err) => {
  console.error('❌ Database connection failed:', err);
});

mongoose.connection.on('connected', () => {
  console.log('✅ Connected successfully to MongoDB');
});

// ✅ Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload({ useTempFiles: true }));

// ✅ Routes
app.use('/product', productRoute);
app.use('/user', userRoute);
app.use('/category', categoryRoute);

// ✅ Default Route for Unhandled Requests
app.use('*', (req, res) => {
  res.status(400).json({
    status: "error",
    message: "Bad request - Route not found"
  });
});

// ✅ Export the App Module
module.exports = app;
