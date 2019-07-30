const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'febriandwinanda@gmail.com',
            clientId: '415402544117-mm63vhlefbedvq8ri57d2u8875cep3ki.apps.googleusercontent.com',
            clientSecret: 'CFntVlZAkqUPCBFhdCBF6jQr',
            refreshToken: '1/FYyFWUDDcHBByUkUzWfRhFztERvLhx-Vd3MBn6tKG-NXR2bzlM4HEocbjPvWU2su'
        }
    }
)

const mailVerify = (user) => {
    var {name, username, email} = user

    const mail = {
        from: 'Feb <febriandwinanda@gmail.com>',
        to: email,
        subject: 'Google API',
        html: `<h1>HELLO ${name}</h1>
        <a href='http://localhost:2022/verify?uname=${username}' >Klik untuk verifikasi</a>`
    }
    
    transporter.sendMail(mail, (err, result) => {
        if(err) return console.log(err.message)
    
        console.log('Email berhasil dikirim')
    })
}

module.exports = mailVerify