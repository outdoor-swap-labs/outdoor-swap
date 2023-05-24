const db = require('../models/databaseModel');
const reservationController = {};

reservationController.createReservation = (req, res, next) => {
  const { item_id: item_id, user_id: user_id } = req.params;
  const { date_reserved, date_returned } = req.body;
  // Note from gio and ale: user_id andf item_deconstructed from body
  // const { date_reserved, date_returned, item_id, user_id } = req.body;
  //const { date_reserved, date_returned } = req.body;
  // const { item_id, user_id, date_reserved, date_returned } = req.body;
  // example of using req.params
  // const { item_id: item_ID, user_id: user_ID, date_reserved, date_returned } = req.params;
  const createReservationQuery = `
      INSERT INTO "public"."reservation" (item_id, user_id, date_reserved, date_returned)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
  const values = [item_id, user_id, date_reserved, date_returned];
  db.query(createReservationQuery, values)
    .then((data) => {
      res.locals.newReservation = data.rows; // Store the reservation in res.locals.newReservation
      return next();
    })
    .catch((err) =>
      next({
        log: `Error with reservationController.createReservation, ${err}`,
        message: { error: 'reservationController.createReservation' },
      })
    );
};

reservationController.getReservationsByUser = (req, res, next) => {
  const { user_id } = req.params;
  const getReservationsByUserQuery = `
      SELECT * FROM "public"."reservation" as a
      JOIN public.item as b
      ON a.item_id = b.id
      WHERE user_id = $1
    `;
  const userResVar = [user_id];
  db.query(getReservationsByUserQuery, userResVar)
    .then((data) => {
      res.locals.userReservations = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: `Error with reservationController.getReservationsByUser, ${err}`,
        message: { error: 'reservationController.getReservationsByUser' },
      })
    );
};

// reservationController.updateReservation = (req, res, next) => {
// // update data returned
// }

module.exports = reservationController;
