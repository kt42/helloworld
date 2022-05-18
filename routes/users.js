var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resourceeeeee');
  next();
});

router.get('/cool/', function(req, res, next) {
  res.send('dfghsdfggsdfgsdfg');
});



module.exports = router;
