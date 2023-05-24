const express = require('express');
const path = require('path');
const router = express.Router();
const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController');
const reservationController = require('../controllers/reservationController');
// const fs = require('fs');
// const controller = require('./controller');

// TEST SAMPLE ONLY ONE ADDRESS FOR EACH REQUEST
// serve index html

router.get('/', itemController.getAllItems, (req, res) => {
  res.status(200).json(res.locals.items);
});

//signin
router.post('/', userController.signIn, (req, res) => {
  res.status(200).send({ message: `Successful login` });
  // res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});

// user create name
router.post('/signUp', userController.signUp, (req, res) => {
  return res.status(200).json(res.locals.newUser);
});

// // user name TEST
// router.get('/test/:id', userController.test, (req, res) => {
//   res.status(200).json(res.locals.username)
// });

// item test get by category
router.get('/category/:category', itemController.getByCategory, (req, res) => {
  res.status(200).json(res.locals.items);
});

// item test get by ID
router.get('/item/:id', itemController.getItemsByID, (req, res) => {
  res.status(200).json(res.locals.items);
});

router.get('/location/:location', itemController.getByLocation, (req, res) => {
  res.status(200).json(res.locals.items);
});

router.patch('/item/:id', itemController.updateItem, (req, res) => {
  res.status(200).json(res.locals.item);
});

// creates reservation
// router.post(
//   '/reservation',
//   reservationController.createReservation,
//   (req, res) => {
//     res.status(200).json(res.locals.newReservation);
//   }
// );
router.post(
  '/user/:user_id/item/:item_id',
  reservationController.createReservation,
  (req, res) => {
    res.status(200).json(res.locals.newReservation);
  }
);

// shows user's reservations
router.get(
  '/user/:user_id/reservations',
  reservationController.getReservationsByUser,
  (req, res) => {
    res.status(200).json(res.locals.userReservations);
  }
);

module.exports = router;
