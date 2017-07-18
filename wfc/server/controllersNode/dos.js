const moment =  require('moment');


module.exports = {
  dos: function(req, res, next){

      let ip = req.ip.slice(7,20);
      let date = moment().format('h:mm:ss');
    req.app.get('db').insertIp([ip, date]);

      let dateF = moment().subtract(5, 'minutes').format('h:mm:ss');
    req.app.get('db').removeOldIps(dateF);

    req.app.get('db').getIp().then(function(r){
        let allIps = [];
      r.map((i) => allIps.push(i.ip));
        let counter = 0;
      allIps.map((i) => {if(i == ip) counter += 1});
        console.log(counter);
      counter > 100 ? res.status(400).send('you shall not pass') : next();
    })
  }

}
