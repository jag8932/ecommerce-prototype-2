import express from 'express';
import cors from 'cors';
import queryData from './database.js';

const app = express();
const port = 3000;

// Enables CORS
//const cors = require('cors');
app.use(cors({ origin: true }));

app.get('/', function (req, res) {
    res.sendFile('../index.html');
});

app.get('/search', async (req, res) => {
    const products = await queryData.searchFor(req.query.search);
    console.log(req.query.search);
    res.json(products);
});

app.listen(port, () => {
    console.log("App is working on port " + port);
});