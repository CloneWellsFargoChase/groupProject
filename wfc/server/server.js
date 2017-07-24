////// SETUP //////
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      controller = require('./controllersNode/controller1'),
      cors = require('cors'),
      axios = require('axios'),
      port = 3007,
<<<<<<< HEAD
      config = require('./.config'),
=======
      config = require('./config'),
>>>>>>> master
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
        hash
      } = require('./controllersNode/controller1'),
      { dos } = require('./controllersNode/dos'),
      bcrypt = require('bcryptjs');


////// MIDDLEWARE //////
app.use(bodyParser.json());
app.use(express.static('../public'));
app.use(cors());

// app.set('trust_proxy', 1); //remove if we dont set up NGINX


////// DATABASE //////
massive(config.database).then(db => {
  app.set('db', db)
})


////// ENDPOINTS //////

app.get('/transactions', transactions)

app.post('/transfer', transfer)

app.post('/newUser', dos, checkIfUserExists, newUser, newCustomerTransInsert, login, controllerEmail.triggerEmail)

app.post('/login', dos, login)

app.post('/tsearch', tsearch)

app.post('/forgot', dos, forgot, forgotEmail.triggerEmail)

app.post('/reset', dos, reset, login)



////// LISTENING //////
app.listen(port, () => console.log(`listening on ${port}`))
