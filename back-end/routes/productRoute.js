const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/list', async (req, res) => {
    let data = await Product.find();
    res.send(data);
});

router.post("/insert", async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();
    res.send(result);
});

router.delete('/delete/:_id', async (req, res) => {
    let data = await Product.deleteOne({ _id: req.params._id });
    res.send(data);
});

router.put('/update/:_id', async (req, res) => {
    let data = await Product.updateOne(
        { _id: req.params._id },
        { $set: req.body }
    );
    res.send(data);
});

module.exports = router;

/*

{
    "p_id":1219,
    "p_name":"S23",
    "p_price":90000,
    "p_category":"Mobile",
    "p_description":"It is a latest release mobile",
    "p_stock":5
}

*/