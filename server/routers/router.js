const express = require('express');
const router = express.Router();

// const controller = require('./controller');

// TEST SAMPLE ONLY ONE ADDRESS FOR EACH REQUEST
// serve index html
router.get('/', (req, res) => {
    return res
      .status(200)
      .send('sendingggg') //working
      //.sendFile(path.join(__dirname, '../client/index.html'));
  });

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