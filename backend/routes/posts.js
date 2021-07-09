const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const hash = require('../Helpers/idHash');

/* GET feedback posts listing. */
router.get('/', (req, res) => {
  knex('posts')
    .then((data) => {
      res.status(200).json(data);
    });
});

router.get('/:id', function (req, res, next) {
  const { postID } = req.params;
  knex('posts')
    .then((data))
});

router.post('/', (req, res) => {
  knex('posts')
    .insert({
      feedbackType: req.body.feedbackType,
      isAnon: req.body.isAnon,
      wantsContact: req.body.wantsContact,
      rank: req.body.rank,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      phoneNumber: req.body.phoneNumber,
      postContent: req.body.postContent,
      postStatus: null
    })
    .then(() => {
      res.sendStatus(201);
      knex('posts')
        .then((data) => {
          res.json(data)
        });
    })
    .catch(
      res.status(422)
    )
    .then(console.log(res));
});

router.delete('/:id', (req, res) => {
  knex('posts')
    .where('id', req.params.id)
    .del()
    .then(() => {
      res.sendStatus(200);
    })
    .catch(res.sendStatus(404));
});

// router.patch();

module.exports = router;