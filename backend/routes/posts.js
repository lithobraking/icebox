var express = require('express');
var router = express.Router();

/* GET feedback posts listing. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;