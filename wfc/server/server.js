////// SETUP //////
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      controller = require('./controllersNode/controller1'),
      cors = require('cors'),
      axios = require('axios'),
      port = 3007;
      config = require('../.config.js')


////// MIDDLEWARE //////
app.use(bodyParser.json());
app.use(express.static('../public'));
app.use(cors());
app.set('trust_proxy', 1); //remove if we dont set up NGINX


////// DATABASE //////
massive(config.database).then(db => {
  app.set('db', db)
})


////// ENDPOINTS //////


// done
// pass in fName, lName, userName, password, email
app.post('/newUser', controller.checkIfUserExists, controller.newUser, controller.login)


// done
// pass in password & username or email
app.post('/login', controller.login)


// pass in from username and to username & email
app.get('/transactions', controller.transactions)


// pass in userName and email for target acct
app.get('/xfer', controller.checkIfUserExists, controller.xfer)


// pass in searchValue
app.get('/transactions/:val', controller.tsearch)


// pass in
app.get('/forgot', controller.forgot)


////// LISTENING //////
app.listen(port, () => console.log(`listening on ${port}`))
