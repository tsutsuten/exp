var express = require('hello');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hello', { title: 'hello' });
});

module.exports = router;
