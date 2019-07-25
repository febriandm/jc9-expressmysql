const express = require('express')

const userRouter = require('./routers/userRouter')

const server = express()
const port = 2022

server.use(express.json())
server.use(userRouter)

server.listen(port, () => {
    console.log('Berhasil Running di port ' + port);
    
})