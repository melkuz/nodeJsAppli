const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs'
})

connection.connect()

connection.query('SELECT * from voitures', (err, result, fields) => {
  if (err) throw err

  console.log('succes!')
})

module.exports = connection;