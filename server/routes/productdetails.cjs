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

const getProductsdetail = express();
getProductsdetail.use(bodyParser.json());


getProductsdetail.get('/product/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const query = 'SELECT * FROM products WHERE id = $1';
        const result = await pool.query(query, [productId]);

        if (result.rows.length === 0) {
            console.log("fuck off");
            res.status(404).json({ error: 'Product not found' });
        } else {
            console.log("fuck off420");
            //console.log(result.rows[0]);
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.log("fuck off3");
        console.error('Error executing query', error);
        res.status(500).json({ error: 'An error occurred while Fetching products data with the given id' });
    }
});


module.exports = getProductsdetail;