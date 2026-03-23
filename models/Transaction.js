const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { 
    type: String, 
    required: true,
    // Asegúrate de que esta lista sea la correcta
    enum: ['Salud y deporte', 'Alimentación', 'Estudios', 'Transporte', 'Otros'] 
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);