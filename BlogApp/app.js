const express = require('express');
const app = express();
const mongoose = require('mongoose');
const categoryRoute = require('./api/routes/category')
const blogRoute=require('./api/routes/blog')
const bodyParser = require('body-parser')
const userRoute = require('./api/routes/user')
const fileUpload=require('express-fileupload')
mongoose.connect('mongodb+srv://Abhishek:55555@crudapp.i4vpy.mongodb.net/?retryWrites=true&w=majority&appName=crudapp')
    .then(res => {
        console.log("Connected Successfully.....");
    })
    .catch(err => {
        console.log(err);
    })
app.use(fileUpload({
    useTempFiles:true
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/category', categoryRoute)
app.use('/blog', blogRoute)

app.use('/user',userRoute)



app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'bad '
    })
})

module.exports = app;
