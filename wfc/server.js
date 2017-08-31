////// SETUP //////
const express = require('express'),
      path = require('path'),
      app = express(),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      controller = require('./server/controllersNode/controller1'),
      cors = require('cors'),
      axios = require('axios'),
      port = process.env.PORT || 80,
      config = require('./server/.config.js'),
      controllerEmail = require('./server/controllersNode/controllerEmail'),
      forgotEmail = require('./server/controllersNode/forgotEmail'),
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
      } = require('./server/controllersNode/controller1'),
      { dos } = require('./server/controllersNode/dos'),
      bcrypt = require('bcryptjs');


////// MIDDLEWARE //////
app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));
app.use(cors());

// app.set('trust_proxy', 1); //remove if we dont set up NGINX


////// DATABASE //////
massive(process.env.connectionString).then(db => {
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


app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})
////// LISTENING //////
app.listen(port, () => console.log(`listening on ${port}`))


