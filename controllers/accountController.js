var db = require('../models/Database.js');
//use jwt to blacklist token.. somehow
// var jwt = require('jwt-simple');

module.exports = {
  deleteAcct: function(req, res, next) {
    var username = req.body.username;
    db.User.destroy({ where: {username: username} }).then(function(result) {
      res.status(200).send();
    }).catch(function(err) {
      console.log(err, 'error');
      res.status(500).send('Error in deletion');
    });
  } 
};