////// REQUIRED //////
const axios = require('axios'),
      moment =  require('moment'),
      bcrypt = require('bcryptjs');


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

      bcrypt.genSalt(11, function(err, salt){
          err ? console.log(err) :
        bcrypt.hash(req.body.password, salt, function(er, hash){
          er ? console.log(er) : console.log('er');
          req.body.p = hash;

          req.app.get('db').newUser([
              req.body.firstName,
              req.body.lastName,
              req.body.userName,
              req.body.p,
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

        })
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
  console.log(req.body);
  if(req.body.userName){
    req.app.get('db').loginU(
        req.body.userName
      ).then(function(r){
        if(r.length > 0){
          bcrypt.compare(
            req.body.password,
            r[0].password
          ).then(function(resp){
            if(resp === true){
              console.log(r);
              res.status(200).send(r)
              next()
            } else {
              res.status(200).send('123user not found')
            }
          })
        } else {
          res.status(200).send('127user not found')
        }
      }, function(r){
        res.status(500).send('error')
      })
  } else {
    req.app.get('db').loginE(
        req.body.email
      ).then(function(r){
        if(r.length > 0){
          console.log('er',r[0].password);
          console.log('rr', req.body.password);

          bcrypt.compare(
            req.body.password,
            r[0].password
          ).then(function(err, resp){
            if(resp === true){
              res.status(200).send(r)
              next()
            } else {
              res.status(200).send('user not found')
            }
          })
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
  const change = Number(req.query.id)
  req.app.get('db').getAllTransactions(
    change).then((resp) => {
      res.status(200).send(resp)
    })
  // get all transactions for a user

},
// end of get transactions for user


// end of xfer
transfer: function(req, res, next){

  let db = req.app.get('db')
  let toUserInfo = []
  let fromUserInfo = []
  let currentDate = moment().format('LL');
  // The FROM user info part of the function
  db.getUserInfo([
    req.body.from
  ])
  .then((resp) => {
    fromUserInfo.push(resp[0].id);
    fromUserInfo.push(resp[0].balance - req.body.amount)
    fromUserInfo.push(currentDate)
    fromUserInfo.push(`${req.body.to} ${req.body.memo}`)
    fromUserInfo.push(req.body.amount)

    db.transferOut(fromUserInfo)
  })
    // The TO user info part of the function
  db.getUserInfo([
    req.body.to
  ])
  .then((resp) => {
    toUserInfo.push(resp[0].id);
    toUserInfo.push(resp[0].balance + req.body.amount);
    toUserInfo.push(currentDate);
    toUserInfo.push(`${req.body.from} ${req.body.memo}`)
    toUserInfo.push(req.body.amount)

    db.transferIn(toUserInfo).then(() =>{
      res.status(200).send('Transaction Successful!')
    })
  })
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

    bcrypt.genSalt(11, function(err, salt){
        err ? console.log(err) :
      bcrypt.hash(req.body.password, salt, function(er, hash){
        er ? console.log(er) :
        req.body.pHash = hash;

        req.app.get('db').resetPassword([
          req.body.userName,
          req.body.pHash
        ]).then(function(r){
          next()
        })

      })
    })

  } else {
    res.status(400).send('check you input')
  }

},
// end reset link


}
////// END EXPORTS //////
