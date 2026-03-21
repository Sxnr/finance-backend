const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware del servidor
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor Funcionando 🚀.');
});

const transactionsRouter = require('./routes/transactions');
app.use('/api/transactions', transactionsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI, {
  family: 4 // Esto obliga a usar IPv4, solucionando el error ECONNREFUSED en routers hogareños
})
.then(() => console.log('✅ ¡CONECTADO A MONGODB ATLAS!'))
.catch(err => {
  console.error('❌ Error de conexión:', err.message);
  console.log('Tip: Revisa que tu password en el .env sea correcto y no tenga símbolos como @');
});