////// SETUP //////
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      controller = require('./controllersNode/controller1'),
      cors = require('cors'),
      axios = require('axios'),
      port = 3007,
      config = require('./config'),
      controllerEmail = require('./controllersNode/controllerEmail'),
      forgotEmail = require('./controllersNode/forgotEmail'),
      { checkIfUserExists,
        newUser,
        login,
        transactions,
        transfer,
        tsearch,
        forgot,
        newCustomerTransInsert,
        reset,
      } = require('./controllersNode/controller1'),
      { dos } = require('./controllersNode/dos')


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


// pass in from username and to username & email
app.get('/transactions', transactions)


// pass in userName and email for target acct make sure amount is +
app.post('/transfer', transfer)


//endpoint 3rd party billpay (insert a charge, probably just via postman)
//atm locator
//graph purchase history data







// done
// pass in fName, lName, userName, password, email
app.post('/newUser', dos, checkIfUserExists, newUser, newCustomerTransInsert, login, controllerEmail.triggerEmail)


// done
// pass in password & username or email
app.post('/login', dos, login)


// done
// pass in searchValue as d (date) or a (amount)
// also pass in user's id until sessions is set
app.post('/tsearch', tsearch)


// pass in username and email
app.post('/forgot', dos, forgot, forgotEmail.triggerEmail)


//for testing pass in username and email but that will be be stored in sessions in the future
//for testing purposes pass in username and email but that will be stored in sessions in the future
//always pass in new password
app.post('/reset', dos, reset, login)


////// LISTENING //////
app.listen(port, () => console.log(`listening on ${port}`))
