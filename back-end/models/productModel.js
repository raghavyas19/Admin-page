const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    p_id: { type: Number, required: true, max: 99999 },  // Assuming 5-digit product ID
    p_name: { type: String, required: true, maxLength: 50 },
    p_price: { type: Number, required: true, max: 9999999999 },  // Adjust max as per requirement
    p_category: { type: String, maxLength: 20 },
    p_description: { type: String, maxLength: 200 },
    p_stock: { type: Number, required: true },
    p_mfd: { type: Date },
    p_exp: { type: Date },
    p_createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
