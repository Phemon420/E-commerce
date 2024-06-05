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












// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const fs = require('fs');
// const https = require('https');
// const tls = require('tls');

// const app = express();

// const secureOptions = [
//     // Disable TLS 1.0 and 1.1
//     tls.DEFAULT_MAX_VERSION,
//     tls.DEFAULT_MIN_VERSION,
// ];

// // Load the self-signed certificate and key
// const options = {
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.crt'),
//     //secureOptions: tls.constants.SSL_OP_NO_TLSv1 | tls.constants.SSL_OP_NO_TLSv1_1 // Disable TLS 1.0 and 1.1
// };

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "flipkart",
//     password: "phemon420",
//     port: 5432,
// });

// const getProducts = express();
// getProducts.use(bodyParser.json());

// getProducts.get('/products', async (req, res) => {
//     try {
//         const productQuery = `
//             SELECT * FROM products
//         `;
//         const productUser = await pool.query(productQuery);

//         res.status(200).json(productUser.rows);
//     } catch (error) {
//         console.error('Error executing query', error);
//         res.status(500).json({ error: 'An error occurred while Fetching products data' });
//     }
// });

// https.createServer(options, app).listen(5000, () => {
//     console.log('HTTPS Server running on https://localhost:5000');
// });

// module.exports = getProducts;
