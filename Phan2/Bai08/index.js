const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

app.get('/', (req, res) => {
  connection.query('SELECT 1 + 1 AS solution', (error, results) => {
    if (error) {
      res.status(500).send('Database connection error: ' + error.message);
      return;
    }
    res.send('Hello from Node.js! Database connection successful. Result: ' + results[0].solution);
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
