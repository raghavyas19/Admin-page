const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/list', async (req, res) => {
    let data = await User.find();
    res.send(data);
});

router.post('/signup', async (req, res) => {
    let data = new User(req.body);
    let result = await data.save();
    res.send(result);
});

router.post('/login', async (req, resp) => {
    if (req.body.u_password && req.body.u_email) {
        let user = await User.findOne(req.body).select("-u_password -u_confirm_password");
        if (user) {
            resp.send({
                message: `Welcome ${user.u_name}`,
                user: user
            });
        }
        else {
            resp.send({ result: 'No user found' })
        }
    } else {
        resp.send({ result: 'No user found' })
    }
});

router.delete('/delete/:_id', async (req, res) => {
    let data = await User.deleteOne({ _id: req.params._id });
    res.send(data);
});

router.put('/update/:_id', async (req, res) => {
    let data = await User.updateOne(
        { _id: req.params._id },
        { $set: req.body }
    );
    res.send(data);
});

module.exports = router;
/* 
{
    "u_mobile": 7300183411,
    "u_name": "RAGHAV",
    "u_password": "passismobile",
    "u_confirm_password": "passismobile",
    "u_email": "raghasvyas@gmail.com"
}

*/