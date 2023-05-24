const db = require ('../models/databaseModel');
const reservationController = {};

reservationController.createReservation = (req, res, next) => {
    const { item_ID, user_ID, date_reserved, date_returned } = req.body;
    const createReservationQuery = `
      INSERT INTO public.reservation (item_ID, user_ID, date_reserved, date_returned)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [item_ID, user_ID, date_reserved, date_returned];
  
    db.one(createReservationQuery, values)
      .then((reservation) => {
        res.locals.newReservation = reservation; // Store the reservation in res.locals.newReservation
        next();
      })
      .catch((error) => {
        res.status(500).json({ error: 'An error occurred while creating the reservation.' });
      });
};
  
reservationController.getReservationsByUser (req, res, next) => {
    const { user_ID } = req.body
    const getReservationsByUserQuery = `
    SELECT * FROM public.reservation as a
    JOIN public.item as b
    ON a.item_ID = b.id
    WHERE user_ID = $1
  `;
  const userResVar = [user_ID];

  db.query(getReservationsByUserQuery, userResVar)
    .then((result) => {
      res.locals.userReservations = result.rows;
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while fetching reservations.' });
    });
};

reservationController.updateReservation = (req, res, next) => {
// update data returned
}



module.exports = reservationController