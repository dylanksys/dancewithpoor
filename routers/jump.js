var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/home', function(req, res) {
  res.send('Path: /home');
};

router.get('/about', function(req, res) {
  res.send('Path: /about');
};

module.exports = router;
