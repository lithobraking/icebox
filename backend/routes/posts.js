var express = require('express');
var router = express.Router();

/* GET feedback posts listing. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

router.post();

router.delete();

router.patch();

module.exports = router;