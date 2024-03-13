const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'demo_db'
});

connection.connect();

app.use(cors());

app.get('/api/data', (req, res) => {
    const tablename = req.headers.tablename;
  connection.query(`SELECT * FROM ${tablename}`, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
