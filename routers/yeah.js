var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/home', function(req, res) {
  res.send('Path: /home');
};

router.get('/lala', function(req, res) {
  res.send('Path: /lala');
};

module.exports = router;
