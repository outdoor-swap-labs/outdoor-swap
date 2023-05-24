const db = require ('../models/databaseModel');
const reservationController = {};

reservationController.createReservation = (req, res, next) => {
    const { item_ID, user_ID, date_reserved, date_returned } = req.body;
    const createReservationQuery =  `
    INSERT INTO "public"."reservation" (item_ID, user_ID, date_reserved, date_returned)
    VALUES ($1, $2, $3, $4)
    RETURNING reservation *, item.name AS item_name, user.name AS user_name
    JOIN item ON reservation.item_ID = item.ID
    JOIN user ON reservation.user_ID = user.ID`;
    const addedVar = [item_ID, user_ID, date_reserved, date_returned];
    db.query(createReservationQuery, addedVar)
        .then(data => {
            res.locals.newReservation = data.rows[0];
            return next();
            })
        .catch(err => next(err))

}

reservationController.getReservation = (req, res, next) => {
    
}

reservationController.updateReservation = (req, res, next) => {
    
}



module.exports = reservationController