var jwt    = require('jsonwebtoken');
var config = require('../config/config1');
var models = require('../models');

function authenticate(req, res, next) 
{
  var token = req.headers['x-access-token'];
 
  if (!token)

    return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, config.secret, function(err, decoded) 
  {
    if (err)

      return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
    
      req.userId = decoded.id;
  
    models.user.findById(req.userId, { password: 0 }).then( function (user) {
      next();
   }).catch(function(error)
   {
      return res.status(401).send("There was a problem finding the user.");
   });
  });
}

module.exports = authenticate;
