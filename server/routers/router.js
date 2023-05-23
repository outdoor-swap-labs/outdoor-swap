const express = require('express');
const path = require ('path');
const router = express.Router();
const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController')
// const fs = require('fs');
// const controller = require('./controller');

// TEST SAMPLE ONLY ONE ADDRESS FOR EACH REQUEST
// serve index html

//signin
router.post('/', userController.signIn, (req, res) => {
  res.status(200).send({message: `Successful login`})
  // res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});


// user create name
router.post('/signUp', userController.signUp, (req, res) => {
  return res.status(200).json(res.locals.newUser)
})

  // user name TEST
router.get('/test/:id', userController.test, (req, res) => {
  res.status(200).json(res.locals.username)
});

// item test get by category
router.get('/category/:category', itemController.getByCategory, (req, res) => {
  res.status(200).json(res.locals.items)
});

router.get('/location/:location', itemController.getByLocation, (req, res) => {
  res.status(200).json(res.locals.items)
});

router.patch('/item/:id', itemController.updateItem, (req, res) => {
  res.status(200).json(res.locals.item)
})

// insert middleware and return middleware in json
// router.get('/',
//   controller.getData,
//   (req, res) => res.status(200).json(res.locals.data)
// );

//add location
// router.post('/post-location',
// // controller.addLocation,
// (req,res) => res.status(200).json(res.locals.location))

//add review
// router.post('/post-review',
// controller.addReview,
// (req,res) => res.status(200).json(res.locals.review))

//delete review
// router.delete('/delete-review', (req, res) => {
//   res.status(200).json(res.locals.removedReview);
// });

//delete all reviews
// router.delete('/delete-all-reviews',
//   controller.deleteAllReviews, (req, res) => {
//     res.status(200).json(res.locals.removedReviews);
//   }
// );

// check reviews
// router.get('/location-with-reviews',
//   controller.getLocationWithReviews,
//   (req, res) => res.status(200).json(res.locals.location)
// );

module.exports = router;