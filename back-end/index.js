const express = require('express');
const app = express();
require('./config');
const userRoute = require('./routes/userRoute');
const customerRoute = require('./routes/customerRoute');
const productRoute = require('./routes/productRoute');
// ==================================
const mongoose = require('mongoose');

// const Product = require('./models/productModel');
// const User = require('./models/userModel');
// const Customer = require('./models/customerModel');

const mongoURI = 'mongodb+srv://raghavyas19:ecomproject@ecom.sfdz2gg.mongodb.net/E_comm';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        
        // Ensuring collections are created
        // Product.createCollection().then(() => console.log('Product collection created'));
        // User.createCollection().then(() => console.log('User collection created'));
        // Customer.createCollection().then(() => console.log('Customer collection created'));
    })
    .catch(err => console.log(err));

// ==================================
app.use(express.json());
app.use('/user',userRoute);
app.use('/customer',customerRoute);
app.use('/product',productRoute);


app.listen(9000, ()=>{
    console.log("Server running on port 9000");
});