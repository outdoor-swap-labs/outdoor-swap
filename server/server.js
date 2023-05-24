const path = require('path');
const express = require('express');
//const cors = require('cors');
// const reservationController = require('./controllers/reservationController');

const app = express();

const router = require('./routers/router.js');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('/api', router);

// app.post(
//   '/item-details/api/reservation',
//   reservationController.createReservation,
//   (req, res) => {
//     res.status(200).json(res.locals.newReservation);
//   }
// );

//catch all
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// default error
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
