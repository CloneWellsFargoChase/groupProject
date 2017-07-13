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
      { checkIfUserExists,
        newUser,
        login,
        transactions,
        xfer,
        tsearch,
        forgot
      } = require('./controllersNode/controller1')


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
app.post('/newUser', checkIfUserExists, newUser, login)


// done
// pass in password & username or email
app.post('/login', login)


// pass in from username and to username & email
app.get('/transactions', transactions)


// pass in userName and email for target acct
app.get('/xfer', checkIfUserExists, xfer)


// pass in searchValue
app.get('/transactions/:val', tsearch)


// pass in
app.get('/forgot', forgot)


////// LISTENING //////
app.listen(port, () => console.log(`listening on ${port}`))
