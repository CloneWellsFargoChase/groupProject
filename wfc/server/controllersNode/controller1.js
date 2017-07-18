////// REQUIRED //////
const axios = require('axios'),
      moment =  require('moment')


////// EXPORTS //////
module.exports = {



// check if user exists
checkIfUserExists: function(req, res, next){

  req.app.get('db').checkIfUserExists([
      req.body.userName,
      req.body.email
    ]).then(function(i){
      i.length == 0 ? next(): res.status(400).send(
          'choose a new username or email'
        )
    }, function(rej){
        console.log(rej);
      res.status(500).send('error')
    })

},
// end of check if user exists


// add a new user
newUser: function(req, res, next){

    let accountNumber = Math.floor(Math.random() * 900000) + 100000;
    let startBal = 500;
    console.log(
      'userName', req.body.userName,
      'password', req.body.password,
      'email', req.body.email
    );

  if(
      req.body.userName.length > 5 &&
      req.body.userName.match(/1|2|3|4|5|6|7|8|9/g) &&
      req.body.password.length > 5 &&
      req.body.password.includes(
        '!', '@', '#', '$', '$', '%', '^',
        '&', '*', '(', ')', '~', '`', ',',
        '.', '<', '>', ':', ';', '{', '}',
        '[', ']', '|', '\\', '\'', '\"',
        '-', '_', '+', '=') &&
      req.body.password.match(/1|2|3|4|5|6|7|8|9/g) &&
      req.body.password.toLowerCase().match(/[a-z]/) &&
      req.body.email.length > 7 &&
      req.body.email.includes('@') &&
      req.body.email.includes('.com')
    ){
    req.app.get('db').newUser([
        req.body.fName,
        req.body.lName,
        req.body.userName,
        req.body.password,
        req.body.email,
        accountNumber,
        startBal
      ]).then(function(r){
          req.body.userId = r[0].id;
          next();
        }, function(rej){
          console.log('69', rej);
        res.status(500).send('error')
      })
  } else {
    res.status(400).send('check input requirements')
  }

},
// end of newuser


// initial transaction insert
newCustomerTransInsert: function(req, res, next){

      let startBal = 500;
      let message = 'welcome';
      let date = moment().format('LL');

    req.app.get('db').newCustomerTransInsert([
      req.body.userId,
      startBal,
      date,
      message,
      startBal
    ]).then(function(){
      next();
    }, function(rej){
      console.log('96', rej);
      res.status(500).send('error')
    })
},
// end initial transaction insert


// login
login: function(req, res, next){

  if(req.body.userName){
    req.app.get('db').loginU([
        req.body.userName,
        req.body.password
      ]).then(function(r){
        if(r.length > 0){
          res.status(200).send(r)
          next()
        } else {
          res.status(200).send('user not found')
        }
      }, function(r){
          console.log('74', r);
        res.status(500).send('error')
      })
  } else {
    req.app.get('db').loginE([
        req.body.email,
        req.body.password
      ]).then(function(r){
        if(r.length > 0){
          res.status(200).send(r)
          next()
        } else {
          res.status(200).send('user not found')
        }
      }, function(r){
        console.log('74', r);
        res.status(500).send('error')
      })
  }
},
// end of login


// get transactions for user
transactions: function(req, res){
  req.app.get('db').getAllTransactions([
    req.body.userId]).then((resp) => {
      console.log(resp)
      res.status(200).send(resp)
    })
  // get all transactions for a user

},
// end of get transactions for user


// end of xfer
xfer: function(req, res){
  // perform xfer process
  // check to make sure inputted username and email match an acct
  // insert row into transactions (from acct)
  // update bal in users table (from acct)
  // insert row into transactions (to acct)
  // update bal in users table (to acct)
},
// end of xfer


// search for transaction
tsearch: function(req, res){

  if(req.body.d && Number(req.body.a)){
    req.app.get('db').searchDA([
      req.body.d,
      Number(req.body.a),
      req.body.userId
    ]).then(function(r){
      res.status(200).send(r)
    })
  } else if(req.body.d){
    req.app.get('db').searchD([
      req.body.d,
      req.body.userId
    ]).then(function(r){
      res.status(200).send(r)
    })

  } else if(req.body.a){
    req.app.get('db').searchA([
      Number(req.body.a),
      req.body.userId
    ]).then(function(r){
      res.status(200).send(r)
    })
  } else {
    res.status(400).send('please enter search value')
  }
},
// end of search for transaction


// forgot username/password
forgot: function(req, res, next){
  console.log(req.body.userName, req.body.email);
  req.app.get('db').checkIfUserAndEmailMatch([
    req.body.userName,
    req.body.email
  ]).then(function(r){
    if(r[0]){
      res.status(200).send('check your email');
      next()
    } else {
      res.status(400).send('nice try')
    }
  })
},
// end forgot username/password


// reset link
reset: function(req, res, next){
  if(
    req.body.password.length > 5 &&
    req.body.password.includes(
      '!', '@', '#', '$', '$', '%', '^',
      '&', '*', '(', ')', '~', '`', ',',
      '.', '<', '>', ':', ';', '{', '}',
      '[', ']', '|', '\\', '\'', '\"',
      '-', '_', '+', '=') &&
    req.body.password.match(/1|2|3|4|5|6|7|8|9/g) &&
    req.body.password.toLowerCase().match(/[a-z]/)
  ){
    req.app.get('db').resetPassword([
      req.body.userName,
      req.body.password
    ]).then(function(r){
      next()
    })
  } else {
    res.status(400).send('check you input')
  }

}
// end reset link


}
////// END EXPORTS //////
