const userController = {};

//post request to create a user
userController.signUp = (req, res, next) => {
  const { username, password } = req.body;
  const createUserQuery = 

}


// login middleware
userController.login = (req, res, next) => {
    const { username, password } = req.body;  
    if (username === '' && password === '') {
      return next();
    }
    else {
      return res.send('unsuccessful login attempt');
    }
  };
  
  module.exports = userController;