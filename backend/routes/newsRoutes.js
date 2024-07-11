const express = require('express');
const router = express.Router();

// Endpoint para obter notícias
router.get('/news', (req, res) => {
    res.send('Endpoint de notícias');
});

module.exports = router;
