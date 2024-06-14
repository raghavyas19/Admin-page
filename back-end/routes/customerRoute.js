const express = require('express');
const router = express.Router();
const Customer = require('../models/customerModel');

router.get('/list', async (req, res) => {
    let data = await Customer.find();
    res.send(data);
});

router.post("/insert", async (req, res) => {
    let data = new Customer(req.body);
    let result = await data.save();
    res.send(result);
});

router.delete('/delete/:_id', async (req, res) => {
    let data = await Customer.deleteOne({ _id: req.params._id });
    res.send(data);
});

router.put('/update/:_id', async (req, res) => {
    let data = await Customer.updateOne(
        { _id: req.params._id },
        { $set: req.body }
    );
    res.send(data);
});

module.exports = router;

/* 

{
    "c_name": "S12",
    "c_mobile": 8989891333,
    "c_pid": 1920
}
    
*/