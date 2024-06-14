require('dotenv').config();
const express = require('express');
const app = express();
require('events').EventEmitter.defaultMaxListeners = 20;

const userRoute = require('./routes/userRoute');
const customerRoute = require('./routes/customerRoute');
const productRoute = require('./routes/productRoute');
const PORT = process.env.PORT || 9000;

const mongoose = require('mongoose');

// Connecting to MongoDB without deprecated options
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.log(err));

app.use(express.json());
app.use('/user', userRoute);
app.use('/customer', customerRoute);
app.use('/product', productRoute);

// Ensure that PORT is a valid, non-restricted port
const port = parseInt(PORT, 10);
if (isNaN(port) || port <= 1024) {
    console.error('Invalid or restricted port specified.');
    process.exit(1);
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
