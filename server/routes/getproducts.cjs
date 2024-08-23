const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const pool = new Pool({
    // user: "postgres",
    // host: "localhost",
    // database: "flipkart",
    // password: "phemon420",
    // port: 5432,
    connectionString: "postgres://default:qm1LGS6vEgYy@ep-crimson-dream-a4d6pmiz-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
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