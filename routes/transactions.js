const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// (Get) Obtiene todos los Gastos
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find().toSorted({ date: -1 });
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// (POST) Agregar un nuevo gasto
router.post('/', async (req, res) => {
    const transaction = new Transaction({
        description: req.body.description,
        amount: req.body.amount,
        category: req.body.category
    });

    try {
        const newTransaction = await transaction.save();
        res.status(201).json(newTransaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;