const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'cjs');
app.use(express.static('public'));

// Endpoint API untuk Bot WhatsApp
app.get('/api/img', async (req, res) => {
    const { id, lastId } = req.query;
    // Logika mengambil data dari Firebase untuk bot
    // Bot akan mengirim .rekam ID_TARGET
    res.json({ status: "streaming", target: id });
});

app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;
