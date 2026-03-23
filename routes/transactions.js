const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// (GET) Obtiene todos los Gastos
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find().sort({ date: -1 }); // 'sort', no 'toSorted'
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// (POST) Agregar un nuevo gasto
router.post('/', async (req, res) => {
    try {
        const newTransaction = new Transaction(req.body);
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;