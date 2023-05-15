import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Root',
    database: 'data'
}).promise()

const result = await pool.query("select * from details")
console.log(result)