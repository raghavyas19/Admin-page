const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    c_name: { type: String, required: true, maxLength: 50 },
    c_mobile: { 
        type: Number, 
        validate: {
            validator: function(v) {
                return v.toString().length === 10;
            },
            message: props => `${props.value} is not a valid mobile number!`
        }, 
        required: [true, 'Customer mobile number required']
    },
    c_pid: { type: Number }
});

module.exports = mongoose.model('Customer', customerSchema);
