var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config/config1');
var models = require('../models');


function auth(req, res, next) {
console.log(req.userId);
  models.user.findById(req.userId, { password: 0 }).then( function (user) {

    next();

    // return res.status(200).send(user);
  // next(user);
}).catch(function(error)
{
   return res.status(500).send("There was a problem finding the user.");
 // return res.status(404).send("No user found.");
});
}
module.exports = auth;
