////// SETUP //////
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      controller = require('../server/controllersNode/controller1'),
      cors = require('cors'),
      axios = require('axios'),
      port = 3007;
      config = require('../.config.js')


////// MIDDLEWARE //////
app.use(bodyParser.json());
app.use(express.static('../public'));
app.use(cors());


////// DATABASE //////
massive(config.database).then(db => {
  app.set('db', db)
})


////// ENDPOINTS //////
app.get('/test', controller.test)


////// LISTENING //////
app.listen(port, () => console.log(`listening on ${port}`))
