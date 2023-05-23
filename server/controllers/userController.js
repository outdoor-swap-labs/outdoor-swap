const userController = {};
const db = require('../models/databaseModel');

//post request to create a user
userController.signUp = (req, res, next) => {
  const { username, password } = req.body;
  const createUserQuery = `INSERT INTO "public"."user" (username, password) VALUES ($1, $2)`;
  const addedVar = [username, password];

  db.query(createUserQuery, addedVar)
    .then(data => {
      res.locals.newUser = data.rows[0];
      return next();
    })
    .catch(err => next(err))
}

//example
// entryController.postEntry = (req, res, next) => {
//   const { content, created_at } = req.body;
//   const addEntryQuery =  'INSERT INTO Entry (content, created_at) VALUES ($1, $2)';
//   const addedVar = [content, created_at];
//   db.query (addEntryQuery, addedVar)
//     .then(data => {
//       res.locals.entry = data.rows[0];
//       return next();
//     })
//     .catch(err => next({
//       log: `Error with entryControlller.postEntry, ${err}`,
//       message: {error:'entryController.postEntry'}
//     }));
// };







//post request to signin
userController.signIn = (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password)
  const usernameQuery = `SELECT username, password FROM "public"."user" WHERE username= $1`;
  const usernameVar = [username];
  db.query(usernameQuery, usernameVar)
    .then(data => {
      if (data.rows.length === 0) {
        throw new Error('No user found with that ID');
      }
      res.locals.password = data.rows[0].password;
      // console.log(res.locals.password)
      if (req.body.password != res.locals.password){
        throw new Error('Password does not match');
        // return next(createErr({message: `Password does not mat`}))
      }
      return next();
    })
    // in postman, error coming up as catchall error but in console shows up as "password does not match"
    .catch(err => next({
      log: `Error with userController.signIn, ${err}`,
      message: {error: 'userController.signIn'}
    }));
}





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