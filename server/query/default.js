import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import {products} from "./data.js";

const app = express();
const port = 3000;

const client = new pg.Client({
  // user: "postgres",
  // host: "localhost",
  // database: "flipkart",
  // password: "phemon420",
  // port: 5432,

  connectionString: "postgres://default:qm1LGS6vEgYy@ep-crimson-dream-a4d6pmiz-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
});

client.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


async function insertProducts() {
    try {
      for (const product of products) {
        const query = `
          INSERT INTO products (id, url, detail_url, title_short, title_long, mrp, cost, discount, quantity, description, discount_description, tagline)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        `;
        const values = [
          product.id,
          product.url,
          product.detailUrl,
          product.title.shortTitle,
          product.title.longTitle,
          product.price.mrp,
          product.price.cost,
          product.price.discount,
          product.quantity,
          product.description,
          product.discount,
          product.tagline
        ];
  
        await client.query(query, values);
      }
      console.log('Products inserted successfully!');
    } catch (error) {
      console.error('Error inserting products:', error);
    } finally {
      client.end();
    }
  }
  
  insertProducts();
  