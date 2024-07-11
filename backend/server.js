const express = require('express');
const connectDB = require('./db'); // Importar a conexão com o DB
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Servidor Backend funcionando!');
});

// Conectar ao MongoDB
connectDB();

// Importar rotas
const newsRoutes = require('./routes/newsRoutes');

// Usar rotas
app.use('/api', newsRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});