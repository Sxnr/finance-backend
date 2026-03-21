const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: {
        type: String,
        enum: ['Food', 'Transport', 'Gym', 'Education', 'leisure'],
        default: 'education'
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', TransactionSchema);