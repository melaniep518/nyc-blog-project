const router = require('express').Router();
const Author = require('mongoose').model('Author');

// ***** Retrieves authors in DB
const getAuthor = (req, res, next) => {
  Author.find({}, (err, data) => {
    res.send(data);
  });
};

// ***** Creates new author and stores in Author model in DB
const createAuthor = (req, res) => {
  Author.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    location:  req.body.location
  }, () => {
    console.log('New author profile created.')
  })
}

// ***** Routing for GET and POST requests
router.route('/')
  .get(getAuthor)
  .post(createAuthor);

  module.exports = router;