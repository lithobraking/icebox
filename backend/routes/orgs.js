var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id/posts', (req, res, next) => {
  // GET all posts associated with an org
})

router.get('/:id/members', (req, res, next) => {
  // GET all users associated with an org
})

// create new org
router.post();

// remove org 
router.delete();

// update org information
router.patch();

module.exports = router;