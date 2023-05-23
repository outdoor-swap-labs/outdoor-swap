const userController = {};
const db = require('../models/databaseModel');

//post request to create a user
// userController.signUp = (req, res, next) => {
//   const { username, password } = req.body;
//   const createUserQuery = 

// }

// test controller
userController.test = (req, res, next) => {
  const id= req.params.id;
  const useridQuery = 'SELECT username FROM "public"."user" WHERE id = $1';
  const useridVar = [id];
  db.query(useridQuery, useridVar)
    .then(data => {
      console.log(data)
      if (data.rows.length === 0) {
        throw new Error('No user found with that ID');
      }
      res.locals.username = data.rows[0].username;
      return next();
    })
    .catch(err => next({
      log: `Error with userController.test, ${err}`,
      message: {error: 'userController.test'}
    }));
};



// login middleware
// userController.login = (req, res, next) => {
//     const { username, password } = req.body;  
//     if (username === '' && password === '') {
//       return next();
//     }
//     else {
//       return res.send('unsuccessful login attempt');
//     }
//   };
  
  module.exports = userController;