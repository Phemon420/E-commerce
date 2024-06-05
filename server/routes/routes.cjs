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

const route = express();
route.use(bodyParser.json());

route.post('/signup', async (req, res) => {
  const { firstname, lastname, username, email, password, phone } = req.body;

  try {
      let errors = [];
      if (!lastname || firstname.length == 0 || !password || !username || !email || !phone) {
          errors.push({ message: "Please fill all the fields" });
      } else if (username.length < 6 || username.length > 12) {
          errors.push({ message: "Please make sure username is 6 to 12 characters long" });
      } else {
          const existingUser = await pool.query(
              `SELECT * FROM users
              WHERE email = $1 OR phone = $2`,
              [email, phone]
          );

          if (existingUser.rows.length > 0) {
              if (existingUser.rows.some(row => row.email === email)) {
                  errors.push({ message: "Email already exists" });
              }
              if (existingUser.rows.some(row => row.phone === phone)) {
                  errors.push({ message: "Phone number already linked with other account" });
              }
          } else {
              const client = await pool.connect();
              const result = await client.query('INSERT INTO users (firstname, lastname, username, email, password, phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [firstname, lastname, username, email, password, phone]);
              client.release();
              res.status(201).json({ message: 'User registered successfully', user: result.rows[0] });
          }
      }
      console.log(errors);
  } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'An error occurred while registering user' });
  }
});



route.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const phone = email;

    try {
        const existingUserQuery = `
            SELECT * FROM users WHERE email = $1 OR phone = $2
        `;
        const existingUser = await pool.query(existingUserQuery, [email, phone]);

        if (existingUser.rows.length > 0) {
            const user = existingUser.rows[0];

            if (password === user.password) {
                res.status(200).json({ message: 'Login successful', firstname: user.firstname, lastname: user.lastname });
            } else {
                res.status(401).json({ error: 'Invalid email or password' });
            }
        } else {
            console.log("User is not available");
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'An error occurred while logging in' });
    }
});


module.exports = route;