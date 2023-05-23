const db = require ('../models/databaseModel');
const itemController = {};

// filter by category
itemController.getByCategory = (req, res, next) => {
    const category= req.params.category;
    const categoryQuery = 'SELECT * FROM "public"."item" WHERE category = $1 AND available = true';
    const categoryItemsVar = [category]
    db.query(categoryQuery, categoryItemsVar)
      .then(data => {
        console.log(data)
        if (data.rows.length === 0) {
          throw new Error('No available item found in that category');
        }
        res.locals.items = data.rows;
        return next();
      })
      .catch(err => next({
        log: `Error with itemController.getByCategory, ${err}`,
        message: {error: 'itemController.getByCategory'}
      }));
};

// filter by zipcode
itemController.getByLocation = (req, res, next) => {
    const location= req.params.location;
    const locationQuery = 'SELECT * FROM "public"."item" WHERE location = $1 AND available = true';
    const locationItemsVar = [location]
    db.query(locationQuery, locationItemsVar)
      .then(data => {
        console.log(data)
        if (data.rows.length === 0) {
          throw new Error('No available item found in that location');
        }
        res.locals.items = data.rows;
        return next();
      })
      .catch(err => next({
        log: `Error with itemController.getByLocation, ${err}`,
        message: {error: 'itemController.getByLocation'}
      }));
};






// different controller methods for CRUD in item SQL Table

// adding item into table
// itemController.postItem = (req, res, next) => {
//   const { content, created_at } = req.body;
//   const addItemQuery =  'INSERT INTO item (content, created_at) VALUES ($1, $2)';
//   const addedVar = [content, created_at];
//   db.query (addItemQuery, addedVar)
//     .then(data => {
//       res.locals.item = data.rows[0];
//       return next();
//     })
//     .catch(err => next({
//       log: `Error with itemControlller.postItem, ${err}`,
//       message: {error:'itemController.postItem'}
//     }));
// };

// // getting all items
// itemController.getItems = (req, res, next) => {
//   const allItemsQuery = 'SELECT * FROM Entry';
//   db.query (allItemsQuery)
//     .then(data => {
//       res.locals.items = data.rows;
//       return next();
//     })
//     .catch(err => next({
//       log: `Error with itemControlller.getItems, ${err}`,
//       message: {error:'itemController.getItems'}
//     }));
// };

// // deleting item
// itemController.deleteItem = (req, res, next) => {
//   const id = req.params.id;
//   const deleteItemQuery =  'DELETE FROM item WHERE id = $1';
//   db.query (deleteItemQuery, id)
//     .then(data => {
//       if (data.rows.length === 0) {
//         throw new Error('No item found with that ID');
//       }
//       res.locals.item = data.rows[0];
//       return next();
//     })
//     .catch(err => next({
//       log: `Error with itemControlller.deleteItem, ${err}`,
//       message: {error:'itemController.deleteItem'}
//     }));
// };

module.exports = itemController;
