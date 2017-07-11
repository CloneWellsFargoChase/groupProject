////// SETUP //////
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      controller = require('./controllersNode/controller1'),
      cors = require('cors'),
      axios = require('axios'),
      port = 3007;


////// MIDDLEWARE //////
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());


////// DB CONNECT //////
    // massive({
    //   host: 'localhost',
    //   port: 5432,
    //   database: 'wfc',
    //   user: 'postgres',
    //   password: 'wfc'
    // }).then(function(db){
    //   app.set('db', db)
    // })


////// ENDPOINTS //////
app.get('/test', controller.test)


////// LISTENING //////
app.listen(port, () => console.log(`listening on ${port}`))
