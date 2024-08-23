const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "flipkart",
    password: "phemon420",
    port: 5432,
});

const getProducts = express();
getProducts.use(bodyParser.json());

getProducts.get('/product', async (req, res) => {
    try {
        const productQuery = `
            SELECT * FROM products
        `;
        const productUser = await pool.query(productQuery);
        res.status(200).json(productUser.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'An error occurred while Fetching products data' });
    }
});


module.exports = getProducts;