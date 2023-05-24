const db = require ('../models/databaseModel');
const itemController = {};

itemController.getAllItems = (req, res, next) => {
  const allItemsQuery = `SELECT * FROM "public"."item"`

  db.query(allItemsQuery)
  .then(data => {
    if (data.rows.length === 0) {
      throw new Error('No available items found');
    }
    res.locals.items = data.rows;
    return next();
  })
  .catch(err => next({
    log: `Error with itemController.getAllItems, ${err}`,
    message: {error: 'itemController.getAllItems'}
  }));
};

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

// filter by ID
itemController.getItemsByID = (req, res, next) => {
  const id = req.params.id;
  const idItemsQuery = 'SELECT * FROM "public"."item" WHERE id = $1';
  const idItemsVar = [id]
  db.query(idItemsQuery, idItemsVar)
    .then(data => {
      console.log(data)
      if (data.rows.length === 0) {
        throw new Error('No available item found with that ID');
      }
      res.locals.items = data.rows;
      return next();
    })
    .catch(err => next({
      log: `Error with itemController.getItemsByID, ${err}`,
      message: {error: 'itemController.getItemsByID'}
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

//update item 
itemController.updateItem = (req, res, next) => {
  const id = req.params.id;
  const updateItemQuery = 'UPDATE "public"."item" SET available=false WHERE id=$1';
  const updatedVar = [id];
  db.query(updateItemQuery, updatedVar)
    .then(data => {
      console.log(data)
        // why can't we throw an error if item is not found???????????????????????????
        // if (data.rows.length == 0){
        //     throw new Error('No item found with that ID');
        // }
        res.locals.item = data.rows[0];
        console.log(res.locals.item)
        return next();
    })
    .catch(err => next({
        log: `Error with itemController.updateItem, ${err}`,
        message: {error: 'itemController.updateItem'}
    }));
;}


module.exports = itemController;
