

const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://hmlneyditwyvva:c5ee46ecefd1460f20bfec78b3cf62ca2ff7611e53050fe8c5981d9deaab72a6@ec2-18-215-41-121.compute-1.amazonaws.com:5432/d3ul97710pjr9m',
  ssl: {
    rejectUnauthorized: false

  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
 
});

module.exports = client