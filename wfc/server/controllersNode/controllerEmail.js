const nMailer = require('nodemailer'),
      config = require('../.config');


module.exports = {
  triggerEmail: function(req, res){

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
      text: 'We are pleased to welcome you as a new customer of chasefargo. We feel honored that you have chosen us to fill your business product needs, and we are eager to be of service.Feel free to contact our support help line at 555-5555, or come by any time between 9:00 a.m. and 6:00 p.m., Monday through Saturday.Thank you again for your choice of chasefargo to fill your banking needs. We look forward to a long and successful relationship.'
    }

    transporter.sendMail(HelperOptions, (error, info) => {
      if(error){
        return console.log(error);
      } else {
        console.log('message sent');
      }
    })
  }
}
