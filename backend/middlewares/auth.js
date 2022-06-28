const isLoggedIn = (req, res, next) => {
    console.log(req.user)
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).send('Not Logged In');
    }
  }
  module.exports = isLoggedIn