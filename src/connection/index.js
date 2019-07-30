const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user: 'fbr_dm',
        password: 'Mysql123',
        host: 'db4free.net',
        database: 'fbr_dm',
        port : 3306
    }
)

module.exports = conn