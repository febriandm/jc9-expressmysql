const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'febriandwinanda@gmail.com',
            clientId:'415402544117-mm63vhlefbedvq8ri57d2u8875cep3ki.apps.googleusercontent.com',
            clientSecret: 'CFntVlZAkqUPCBFhdCBF6jQr',
            refreshToken: '1/FYyFWUDDcHBByUkUzWfRhFztERvLhx-Vd3MBn6tKG-NXR2bzlM4HEocbjPvWU2su'
        }
    }
)

const mail = {
    from: 'Feb <febriandwinanda@gmail.com>',
    to: 'dinand.inbox@gmail.com',
    subject: 'Test API Gmail',
    html: '<h1>Hello</h1>'
}

transporter.sendMail(mail, (err,result) =>{
    if(err) return console.log(err.message)
    
    console.log('Email terkirim')
    
})