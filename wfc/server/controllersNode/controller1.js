////// REQUIRED //////
const axios = require('axios');


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

//check to make sure random number is not already present in db
//check firstname, lname, userName, password, email characteristics
  if(true){
    req.app.get('db').newUser([
        req.body.fName,
        req.body.lName,
        req.body.userName,
        req.body.password,
        req.body.email,
        accountNumber,
        startBal
      ]).then(function(r){
        res.status('200').send('welcome to our bank')
        next();
      }, function(rej){
        console.log(rej);
        res.status(500).send('error')
      })
  } else {
    res.status(400).send('check input requirements')
  }

},
// end of newuser


// login
login: function(req, res){

  if(req.body.userName){
    req.app.get('db').loginU([
        req.body.userName,
        req.body.password
      ]).then(function(r){
        if(r.length > 0){
          res.status(200).send(r)
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
  // req.params.val
  //binary search tree creation/lookup
},
// end of search for transaction


// forgot username/password
forgot: function(req, res){
  // take in ___ and send email with ___ info
}
// end forgot username/password


}
////// END EXPORTS //////
