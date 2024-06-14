const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    u_mobile: { 
        type: Number, 
        validate: {
            validator: function(v) {
                return v.toString().length === 10;
            },
            message: props => `${props.value} is not a valid mobile number!`
        }, 
        required: [true, 'User mobile number required']
    },
    u_name: { type: String, maxLength: 30 },
    u_password: { type: String, required: true, minLength: 8, maxLength: 30 },
    u_confirm_password: { type: String },
    u_email: { type: String }
});

module.exports = mongoose.model('User', userSchema);
