const express = require('express');
const path = require('path');
const app = express();

// Gunakan ejs atau kirim file html langsung
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint API untuk Bot WhatsApp Papa
app.get('/api/img', async (req, res) => {
    const { id } = req.query;
    // Logika bot di sini
    res.json({ 
        status: "streaming", 
        target: id, 
        message: "System Active" 
    });
});

// Arahkan halaman utama ke file HTML Papa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Penting untuk Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
