import express from 'express';
import cors from 'cors';
import getAllProducts  from './database.js';

const app = express();
const port = 3000;

// Enables CORS
//const cors = require('cors');
app.use(cors({ origin: true }));

app.get('/', function (req, res) {
    res.sendFile('../index.html');
});

app.get('/api', async (req, res) => {
    const products = await getAllProducts();
    res.json(products);
});

app.listen(port, () => {
    console.log("App is working on port " + port);
});