const express = require('express')

const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/taskRouter')
const porrt = require('./config/port')

const app = express()
const port = porrt

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Berhasil Running di port ' + port);
    
})

app.get('/', (req,res) => {
    res.send(`<h1>API sukses berjalan di PORT ${port}</h1>`)
})