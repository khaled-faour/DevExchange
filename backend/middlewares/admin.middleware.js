const isAdmin = (req, res, next) => {
    console.log(req.user)
    if (req.user.user_type === "62c95e3d35fa2fa2caf2421c") {
      next();
    } else {
      res.status(401).send('Not Logged In');
    }
  }
  module.exports = isAdmin