var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config/config1');
var models = require('../models');

function auth(req, res, next) {
console.log(req.userId);
  models.user.findById(req.userId, { password: 0 }).then( function (user) {
   next();
}).catch(function(error)
{
   return res.status(401).send("There was a problem finding the user.");
});
}
module.exports = auth;
