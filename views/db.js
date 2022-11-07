const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs'
})

connection.connect(function(error){
  if(error){
    throw error;
  }else{
    console.log('succes!')
  }
})



module.exports = connection;