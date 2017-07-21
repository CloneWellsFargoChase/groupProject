const nMailer = require('nodemailer'),
<<<<<<< HEAD
      config = require('../../.config');
=======
      config = require('../.config');
>>>>>>> master

module.exports = {
  triggerEmail: function(req, res){
      console.log('6', req.body.email);

    let transporter = nMailer.createTransport({
      service: 'gmail',
      secure: false,
      port: 25,
      auth: {
        user: config.email,
        pass: config.password
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    let HelperOptions = {
      from: config.email,
      to: req.body.email,
      subject: 'welcome to chasefargo',
      text: 'We are sorry you can\'t remember things. Follow our link to reset your password. Consider saving your password in an inconspicuous place like the desktop and in an easy to find file with a name like password. http://localhost.com:3007/someResetPageOnTheFontEnd'
    }

      transporter.sendMail(HelperOptions, (error, info) => {
        if(error){
          return console.log(error);
        } else {
          console.log('message sent');
          console.log(info);
        }
      })


  }
}
