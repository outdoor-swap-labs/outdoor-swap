const userController = {};

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