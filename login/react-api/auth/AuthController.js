var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require('./VerifyToken');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


/**Configure JWT*/
var jwt = require('jsonwebtoken');
var config = require('../config'); // get config file

router.post('/login', function (req, res) {
  console.log("Clicked");
  let allowedUsers = {
    admin: "admin123",
    admin2: "superadmin"
  }
  let userDetl = {
    admin: {
      name: "User 1",
      email: "admin@abc.com"
    },
    admin2: {
      name: "User 2",
      email: "admin2@abc.com"
    }
  }


  if (allowedUsers[req.body.userId] === req.body.password) {
    let token = jwt.sign({ id: req.body.userId }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token , userDetl : userDetl[req.body.userId]  });
  } else {
    return res.send({ auth: false, token: null });
  }
});

router.get('/logout', function (req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;