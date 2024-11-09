const express = require('express');
const app = express();
const path = require('path');
// Middleware pour servir les fichiers statiques (CSS, images)
app.use(express.static('public'));

// Routes pour servir les fichiers HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'page1.html'));
});

app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'page2.html'));
});

app.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'page3.html'));
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
