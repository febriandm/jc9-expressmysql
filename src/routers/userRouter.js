const conn = require('../connection')
const router = require('express').Router()
const isEMail = require('validator/lib/isEmail')
const bcrypt = require('bcrypt')

//CREATE ONE USER
router.post('/users', (req, res) => {
    var {username, name, email, password} = req.body

    if(!isEMail(email)){
        return res.send('Email is not valid')
    }

    password = bcrypt.hashSync(password, 8)

    const sql = `INSERT INTO users (username, name, email, password) VALUES ( '${username}', '${name}', '${email}', '${password}' )`

    conn.query(sql, (err, result) => {
        if(err){
            return res.send(err)
        }

        res.send(result)
    })
})

module.exports = router